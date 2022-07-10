// index
// entry file for vue application

// import
import { createApp } from "vue";
import { createStore } from "vuex";
import StoreConfig from './store.js';
import "./global.js";
import App from "./app.vue";

// createApp
const app = createApp(App);

// components register
const componentsRegister = (prefix, components) => {
    const toPojo = (components) => {
        const r = {};

        components.keys().forEach((fileName) => {
            const component = components(fileName);
            const key = fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '');
            const value = component.default || component;
            r[key] = value;
        });

        return r;
    };
    
    const pojo = toPojo(components);
    Object.entries(pojo).forEach(([key, value]) => {
        const name = (Quid.Str.is(prefix)) ? prefix + key : key;
        app.component(name, value);
    });
};

// auto-register components
const componentVue = require.context('./component', false, /[A-Z]\w+\.(vue|js)$/);
const interfaceVue = require.context('./interface', false, /[A-Z]\w+\.(vue|js)$/);
const routeVue = require.context('./route', false, /[A-Z]\w+\.(vue|js)$/);
componentsRegister(null, componentVue);
componentsRegister("Interface", interfaceVue);
componentsRegister("Route", routeVue);

// navigation
Quid.Component.Doc.call(document, { routeWrap: '> #app', contentType: 'json', attrTriggered: null });
Quid.Shortcut.trigSetup(document);

// initialState
const rootNode = Quid.Shortcut.qs(document, '#app');
const initialState = Quid.Ele.getAttr(rootNode, 'data-state', true);
Quid.Ele.removeAttr(rootNode, 'data-state');

// vuex
const vuexConfig = StoreConfig(initialState);
const store = createStore(vuexConfig);
app.use(store);

// app mount
app.mount("#app");

// mutate store
Quid.Shortcut.ael(document, 'doc:initAjax', function () {
    store.commit('loadingChange', true);
});
Quid.Shortcut.ael(document, 'doc:makeJsonResponse', function (event, json) {
    store.commit('routeChange', json);
});