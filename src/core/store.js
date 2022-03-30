// storeConfig
const StoreConfig = (state) => {
    if (state.debug === true) {
        d(state);
    }

    return {
        state,
        mutations: {},
        getters: {
            lang: (state) => state.route.lang,
            
            route: (state) => Helper.relativeUri() === '/' ? 'RouteHome' : 'RouteError',
            
            text: (state) => {
                return (key) => {
                    return state.text[key] || '?';
                };
            },
        },
    };
};

export { StoreConfig };
