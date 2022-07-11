// store
// contains vuex getters and mutations available globally

// export
export default (state) => {
    state.loading = false;
    if (state.debug === true) {
        Quid.Shortcut.d(state);
    }

    return {
        state,
        mutations: {
            loadingChange(state, payload) {
                Quid.Bool.typecheck(payload);
                state.loading = payload;
            },

            routeChange(state, payload) {
                Quid.Pojo.typecheck(payload);
                
                if(state.debug === true) 
                Quid.Shortcut.d(Quid.Json.recode(payload));
                
                state.route = payload;

                this.commit('loadingChange', false);
            },
        },
        getters: {
            isLoading: (state) => state.loading === true,
            withNavigation: (state) => state.navigation === true,
            isDev: (state) => state.env !== 'prod',
            env: (state) => state.env || 'dev',
            version: (state) => state.version,
            langCode: (state) => state.route.lang,
            timestamp: (state) => state.route.timestamp,
            uriRelative: (state) => state.route.uri,
            route: (state) => state.route,
            vueRoute: (state) => (state.route.component != null ? 'Route' + state.route.component : 'RouteError'),
            com: (state) => state.route.com,
            
            session: (state) => {
                return (key) => {
                    const session = state.route.session;
                    return Quid.Pojo.is(session) ? Quid.Pojo.climb(key, session) : null;
                };
            },

            flash: (state) => {
                return (key) => {
                    let r = null;
                    const flash = state.route.flash;
                    const isPojo = Quid.Pojo.is(flash);

                    if (key === '*') r = isPojo ? flash : {};
                    else if (isPojo) r = Quid.Pojo.climb(key, flash);

                    return r;
                };
            },

            langText: (state) => {
                return (key, base) => {
                    const source = base === true ? state.route.langText.base : state.route.langText.route;
                    return Quid.Pojo.is(source) ? Quid.Pojo.climb(key, source) : null;
                };
            },

            routeData: (state) => {
                return (key) => {
                    const source = state.route.data;
                    return Quid.Pojo.is(source) ? Quid.Pojo.climb(key, source) : null;
                };
            },
        },
    };
};
