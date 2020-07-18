import Vue from "vue";
import Toast from "./Toast.vue";
import Vuetify from "vuetify/lib";
const ToastConstructor = Vue.extend(Toast);

window.logJson = (legend, object) => {
    console.log(`${legend}:`, JSON.stringify(object, null, 4));
};

function install(Vue, globalOptions = {}) {
    let cmp = null;
    const queue = [];
    const property = globalOptions.property || "$toast";

    function createCmp(options) {
        const component = new ToastConstructor();
        const vuetifyObj = new Vuetify();
        component.$vuetify = vuetifyObj.framework;
        const componentOptions = { ...Vue.prototype[property].globalOptions, ...options };

        if (componentOptions.slot) {
            component.$slots.default = componentOptions.slot;
            delete componentOptions.slot;
        }

        Object.assign(component, componentOptions);
        document.body.appendChild(component.$mount().$el);

        return component;
    }

    function show(message, options = {}) {
        //window.logJson("show:options", options);
        if (cmp) {
            const isQueueable = options.queueable !== undefined ? options.queueable : globalOptions.queueable;

            if (isQueueable) {
                queue.push({ message, options });
            } else {
                cmp.close();
                queue.unshift({ message, options });
            }

            return;
        }

        options.message = message;
        cmp = createCmp(options);
        cmp.$on("statusChange", (isActive, wasActive) => {
            if (wasActive && !isActive) {
                cmp.$nextTick(() => {
                    cmp.$destroy();
                    cmp.$el.parentNode.removeChild(cmp.$el);
                    cmp = null;

                    if (queue.length) {
                        const toast = queue.shift();
                        show(toast.message, toast.options);
                    }
                });
            }
        });
    }

    function shorts(options) {
        const colors = ["success", "info", "error", "warning"];

        const defaultShorts = {
            success: {
                snackbarAttrs: {
                    color: "success",
                },
                icon: "mdi-check-circle-outline",
                iconColor: "white",
            },

            info: {
                snackbarAttrs: {
                    color: "info",
                },
                icon: "mdi-information-outline",
                iconColor: "white",
            },

            error: {
                snackbarAttrs: {
                    color: "error",
                },
                icon: "mdi-alert-circle-outline",
                iconColor: "white",
            },

            warning: {
                snackbarAttrs: {
                    color: "warning",
                },
                icon: "mdi-alert-outline",
                iconColor: "white",
            },
        };

        const methods = {};

        colors.forEach((color) => {
            methods[color] = (message, options) => show(message, { color, ...options });
        });

        const optionShorts = options.shorts ? options.shorts : {};
        const mergedShorts = Object.assign({}, defaultShorts, optionShorts);
        //window.logJson("mergedShorts", mergedShorts);

        for (let key in mergedShorts) {
            const localOptions = mergedShorts[key];
            //window.logJson("options", { ...options });
            // window.logJson("local options", localOptions);
            methods[key] = (message, options) => show(message, { ...localOptions, ...options });
        }

        return methods;
    }

    function getCmp() {
        return cmp;
    }

    function clearQueue() {
        return queue.splice(0, queue.length);
    }

    Vue.prototype[property] = Object.assign(show, {
        globalOptions,
        getCmp,
        clearQueue,
        ...shorts(globalOptions),
    });
}

function ToastSnackbar() {}
ToastSnackbar.install = install;

export default ToastSnackbar;
