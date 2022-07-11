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
            route: (state) => (state.route.component != null ? 'Route' + state.route.component : 'RouteError')
        },
    };
};
