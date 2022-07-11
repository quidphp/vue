<!-- root component which loads the correct route -->
<template>
    <component :is="route" />
</template>

<script>
export default {
    mounted() {
        Quid.Shortcut.ael(document, 'doc:initAjax', this.initAjax);
        Quid.Shortcut.ael(document, 'doc:makeJsonResponse', this.onResponse);
    },

    unmounted() {
        Quid.Shortcut.rel(document, 'doc:initAjax', this.initAjax);
        Quid.Shortcut.rel(document, 'doc:makeJsonResponse', this.onResponse);
    },

    methods: {
        initAjax() {
            this.$store.commit('loadingChange', true);
        },

        onResponse(event, json) {
            this.$store.commit('routeChange', json);
        }
    },

    computed: {
        isLoading() {
            return this.$store.getters.isLoading
        },

        route() {
            return this.$store.getters.route
        }
    }
}
</script>