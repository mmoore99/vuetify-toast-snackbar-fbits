# Vuetify Toast Snackbar for Vuetify 2.3+

> Basic Vue toast service with queue support that uses [Vuetify](https://github.com/vuetifyjs/vuetify) Snackbar component.
> Update from https://github.com/jaredhan418/vuetify-toast-snackbar-ng

## Installation

```bash
npm install vuetify-toast-snackbar-ng
```

## Usage

### Bundler (Webpack, Rollup)

```js
import VuetifyToast from "vuetify-toast-snackbar-fbits";

Vue.use(vuetifyToast, {
    snackbarAttrs: {},
    queueable: false,
    shorts: {
        custom: {
            snackbarAttrs: {
                color: "blue",
            },
            icon: "mdi-account-box",
        },
    },
    property: "$toast", // default
});
```

### Vue loader (e.g. Nuxt.js)

Update `plugins/vuetify.js`

```js
import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar-fbits";

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VRow,
        VCol,
        VIcon,
        VBtn,
    },
});

Vue.use(VuetifyToast);
```

### Call

```js
this.$toast("Default toast");

this.$toast.info("Info toast");

this.$toast("Custom options", {
    color: "green",
    dismissable: true,
    queueable: true,
});

this.$toast.custom("Custom short");
```

### Get currently displayed Toast component

```js
let cmp = this.$toast.getCmp();
cmp.message = "Dynamic properties";
cmp.close();
```

### Clear Toasts queue

```js
let queue = this.$toast.clearQueue();
```
