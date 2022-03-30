// vueComponentsRegister
const VueComponentsRegister = (app,prefix, components) => {
    const pojo = VueComponentsToPojo(components);
    Object.entries(pojo).forEach(([key, value]) => {
        const name = (Helper.isString(prefix)) ? prefix + key : key;
        app.component(name, value);
    });
};

// vueComponentsToPojo
const VueComponentsToPojo = (components) => {
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

export { VueComponentsRegister, VueComponentsToPojo };
