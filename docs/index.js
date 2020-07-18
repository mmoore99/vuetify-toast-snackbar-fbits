'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var Vuetify = _interopDefault(require('vuetify/lib'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    x: {
      type: String,
      "default": 'right'
    },
    y: {
      type: String,
      "default": 'bottom'
    },
    color: {
      type: String,
      "default": 'info'
    },
    icon: {
      type: String,
      "default": ''
    },
    iconColor: {
      type: String,
      "default": ''
    },
    classes: {
      type: [String, Object, Array],
      "default": ''
    },
    message: {
      type: String,
      "default": ''
    },
    timeout: {
      type: Number,
      "default": 3000
    },
    dismissable: {
      type: Boolean,
      "default": true
    },
    multiLine: {
      type: Boolean,
      "default": false
    },
    vertical: {
      type: Boolean,
      "default": false
    },
    showClose: {
      type: Boolean,
      "default": false
    },
    closeText: {
      type: String,
      "default": ''
    },
    closeIcon: {
      type: String,
      "default": 'close'
    },
    closeColor: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      return _this.show();
    });
  },
  watch: {
    active: function active(isActive, wasActive) {
      this.$emit('statusChange', isActive, wasActive);
    }
  },
  methods: {
    show: function show() {
      this.active = true;
    },
    close: function close() {
      this.active = false;
    },
    dismiss: function dismiss() {
      if (this.dismissable) {
        this.close();
      }
    }
  }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".vts{max-width:none!important;width:auto!important}.vts .v-snack__content{justify-content:flex-start}.vts__icon{margin-right:12px}.vts__message{margin-right:auto}.vts__close{margin:0 -8px 0 24px!important;justify-self:flex-end}.vts.v-snack--vertical .vts__icon{margin:0 0 12px!important}.vts.v-snack--vertical .v-snack__content{padding-bottom:16px!important}.vts.v-snack--vertical .vts__message--padded{padding:12px 0 0}.vts.v-snack--vertical .vts__icon+.vts__message{padding-top:0}.vts.v-snack--vertical .vts__close{margin:12px 0 -8px!important}.vts.v-snack--vertical .vts__close--icon{margin:0!important;position:absolute;right:4px;top:4px;transform:scale(.75);padding:4px!important}";
styleInject(css_248z);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('v-snackbar', {
    staticClass: "v-application vts",
    "class": _vm.classes,
    attrs: {
      "timeout": _vm.timeout,
      "color": _vm.color,
      "bottom": _vm.y === 'bottom',
      "top": _vm.y === 'top',
      "left": _vm.x === 'left',
      "right": _vm.x === 'right',
      "multi-line": _vm.multiLine,
      "vertical": _vm.vertical,
      "role": "alert"
    },
    on: {
      "click": _vm.dismiss
    },
    model: {
      value: _vm.active,
      callback: function callback($$v) {
        _vm.active = $$v;
      },
      expression: "active"
    }
  }, [!!_vm.icon ? _c('v-icon', {
    staticClass: "vts__icon",
    attrs: {
      "dark": "",
      "left": "",
      "color": _vm.iconColor
    }
  }, [_vm._v("\n    " + _vm._s(_vm.icon) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vts__message",
    "class": {
      'vts__message--padded': _vm.showClose && !_vm.closeText
    }
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  }), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _vm.showClose ? _c('v-btn', {
    staticClass: "vts__close",
    "class": {
      'vts__close--icon': !_vm.closeText
    },
    attrs: {
      "icon": !_vm.closeText,
      "text": !!_vm.closeText,
      "color": _vm.closeColor
    },
    on: {
      "click": _vm.close
    }
  }, [!_vm.closeText ? _c('v-icon', [_vm._v(_vm._s(_vm.closeIcon))]) : _vm._e(), _vm._v(" "), !!_vm.closeText ? _c('span', [_vm._v(_vm._s(_vm.closeText))]) : _vm._e()], 1) : _vm._e()], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var Toast = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

var ToastConstructor = Vue.extend(Toast);

function install(Vue) {
  var globalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cmp = null;
  var queue = [];
  var property = globalOptions.property || '$toast';

  function createCmp(options) {
    var component = new ToastConstructor();
    var vuetifyObj = new Vuetify();
    component.$vuetify = vuetifyObj.framework;
    var componentOptions = Object.assign({}, Vue.prototype[property].globalOptions, options);

    if (componentOptions.slot) {
      component.$slots["default"] = componentOptions.slot;
      delete componentOptions.slot;
    }

    Object.assign(component, componentOptions);
    document.body.appendChild(component.$mount().$el);
    return component;
  }

  function show(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (cmp) {
      var isQueueable = options.queueable !== undefined ? options.queueable : globalOptions.queueable;

      if (isQueueable) {
        queue.push({
          message: message,
          options: options
        });
      } else {
        cmp.close();
        queue.unshift({
          message: message,
          options: options
        });
      }

      return;
    }

    options.message = message;
    cmp = createCmp(options);
    cmp.$on('statusChange', function (isActive, wasActive) {
      if (wasActive && !isActive) {
        cmp.$nextTick(function () {
          cmp.$destroy();
          cmp.$el.parentNode.removeChild(cmp.$el);
          cmp = null;

          if (queue.length) {
            var toast = queue.shift();
            show(toast.message, toast.options);
          }
        });
      }
    });
  }

  function shorts(options) {
    var colors = ['success', 'info', 'error', 'warning'];
    var methods = {};
    colors.forEach(function (color) {
      methods[color] = function (message, options) {
        return show(message, Object.assign({
          color: color
        }, options));
      };
    });

    if (options.shorts) {
      var _loop = function _loop(key) {
        var localOptions = options.shorts[key];

        methods[key] = function (message, options) {
          return show(message, Object.assign({}, localOptions, options));
        };
      };

      for (var key in options.shorts) {
        _loop(key);
      }
    }

    return methods;
  }

  function getCmp() {
    return cmp;
  }

  function clearQueue() {
    return queue.splice(0, queue.length);
  }

  Vue.prototype[property] = Object.assign(show, Object.assign({
    globalOptions: globalOptions,
    getCmp: getCmp,
    clearQueue: clearQueue
  }, shorts(globalOptions)));
}

function ToastSnackbar() {}

ToastSnackbar.install = install;

module.exports = ToastSnackbar;
