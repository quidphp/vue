// register

// export
export default (app, prefix, components) => {
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

