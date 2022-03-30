import { createApp } from "vue";
import { createStore } from "vuex";
import './core/global.js';
import { StoreConfig } from './core/store.js';
import { LangFr } from './core/lang-fr.js';
import { VueComponentsRegister } from './core/vue.js';

// app
import App from "./app.vue";
const app = createApp(App);

// auto-register components
const componentVue = require.context('./component', false, /[A-Z]\w+\.(vue|js)$/);
const interfaceVue = require.context('./interface', false, /[A-Z]\w+\.(vue|js)$/);
const routeVue = require.context('./route', false, /[A-Z]\w+\.(vue|js)$/);
VueComponentsRegister(app,null, componentVue);
VueComponentsRegister(app,"Interface", interfaceVue);
VueComponentsRegister(app,"Route", routeVue);

// vuex
const initialState = {
    debug: true,
    lang: 'fr',
    text: LangFr
};
const vuexConfig = StoreConfig(initialState);
const store = createStore(vuexConfig);
app.use(store);

// app mount
app.mount("#app");