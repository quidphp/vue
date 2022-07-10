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
            // retourne vrai si l'application est en train de charger une nouvelle route
            isLoading: (state) => state.loading === true,

            // retourne vrai si la navigation via ajax est activé
            withNavigation: (state) => state.navigation === true,

            // retourne vrai si l'application est en dev
            isDev: (state) => state.env !== 'prod',

            // retourne l'environnement de l'application (dev, staging ou prod)
            env: (state) => state.env || 'dev',

            // retourne l'environnement de l'application (dev, staging ou prod)
            version: (state) => state.version,
            
            // retourne le code de langue de l'application (fr)
            langCode: (state) => state.route.lang,

            // retourne le timestamp de la dernière route chargée
            timestamp: (state) => state.route.timestamp,

            // retourne l'uri relative actuelle
            uriRelative: (state) => state.route.uri,

            // route
            route: (state) => state.route,

            // retourne le nom de la route Vue à utiliser
            vueRoute: (state) => (state.route.vue != null ? 'Route' + state.route.vue : 'RouteError'),
            
            // retourne la dernière communication du back-end, retourne du html
            com: (state) => state.route.com,
            
            // retourne une méthode pour aller chercher du contenu de l'objet session
            session: (state) => {
                return (key) => {
                    const session = state.route.session;
                    return Quid.Pojo.is(session) ? Quid.Pojo.climb(key, session) : null;
                };
            },

            // retourne une méthode pour aller chercher du contenu de l'objet flash (permet de pré-remplir des formulaires)
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

            // retourne une méthode pour aller chercher des textes, liés à la route ou l'interface
            langText: (state) => {
                return (key, base) => {
                    const source = base === true ? state.route.langText.base : state.route.langText.route;
                    return Quid.Pojo.is(source) ? Quid.Pojo.climb(key, source) : null;
                };
            },

            // contient des données spécifiques à la route
            routeData: (state) => {
                return (key) => {
                    const source = state.route.data;
                    return Quid.Pojo.is(source) ? Quid.Pojo.climb(key, source) : null;
                };
            },
        },
    };
};
