// import
import { createApp } from "vue";
import { createStore } from "vuex";
import StoreConfig from '*/store.js';
import ComponentsRegister from '*/register.js';
import "*/global.js";
import App from "*/app.vue";

// createApp
const app = createApp(App);

// auto-register components
const componentVue = require.context('./component', false, /[A-Z]\w+\.(vue|js)$/);
const interfaceVue = require.context('./interface', false, /[A-Z]\w+\.(vue|js)$/);
const routeVue = require.context('./route', false, /[A-Z]\w+\.(vue|js)$/);
ComponentsRegister(app,null, componentVue);
ComponentsRegister(app,"Interface", interfaceVue);
ComponentsRegister(app,"Route", routeVue);

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