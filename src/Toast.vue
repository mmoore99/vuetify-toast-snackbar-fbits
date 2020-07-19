<template>
    <v-snackbar
        v-bind=mergedAttrs
        v-model="active"
        class="v-application"
        :class="classes">
        <v-row @click="dismiss">
            <v-col class="d-flex align-center">
                <v-icon v-if="!!icon" large :color="iconColor">{{ icon }}</v-icon>
                <span class="pl-2 text-h6 font-weight-regular">{{ message }}</span>
            </v-col>
        </v-row>
        <template v-if="isShowClose" v-slot:action="{ attrs }">
            <v-row>
                <v-col class="d-flex align-center">
                    <v-btn
                        v-bind="attrs"
                        :icon="isCloseIcon"
                        :text="!isCloseIcon"
                        :color="closeColor"
                        @click="close">
                        <v-icon v-if="isCloseIcon" class="pr-2">{{ closeIcon }}</v-icon>
                        <span v-else>{{ closeText }}</span>
                    </v-btn>
                </v-col>
            </v-row>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        props: {
            // see "defaultSnackbarAttrs" in data for defaults
            snackbarAttrs: {
                type: Object
            },
            icon: {
                type: String,
                default: "mdi-alert-circle-outline"
            },
            iconColor: {
                type: String,
                default: "white"
            },
            classes: {
                type: [String, Object, Array],
                default: ""
            },
            message: {
                type: String,
                default: ""
            },

            isDismissable: {
                type: Boolean,
                default: true
            },

            isShowClose: {
                type: Boolean,
                default: true
            },

            isCloseIcon: {
                type: Boolean,
                default: true
            },

            closeText: {
                type: String,
                default: "Close"
            },

            closeIcon: {
                type: String,
                default: "mdi-close-circle"
            },

            closeColor: {
                type: String,
                default: "white"
            }
        },

        data: () => ({
            active: false,
            defaultSnackbarAttrs: {
                text: false,
                color: "success",
                top: true,
                bottom: false,
                left: false,
                right: false,
                timeout: 3000,
                elevation: 24,
                multiline: false
            }
        }),

        mounted() {
            this.$nextTick(() => this.show());
        },

        watch: {
            active: function(isActive, wasActive) {
                this.$emit("statusChange", isActive, wasActive);
            }
        },

        methods: {
            show() {
                this.active = true;
            },

            close() {
                this.active = false;
            },

            dismiss() {
                if (this.isDismissable) {
                    this.close();
                }
            }
        },

        computed: {
            mergedAttrs() {
                //window.logJson(`defaultSnackbarAttrs`, this.defaultSnackbarAttrs);
                //window.logJson(`snackbarAttrs`, this.snackbarAttrs);
                return Object.assign(
                    {},
                    this.defaultSnackbarAttrs,
                    this.snackbarAttrs
                );
            }
        }
    };
</script>

<style>
</style>
