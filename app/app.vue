<!-- root component which loads the correct route -->
<template>
    <component :is="vueRoute" />
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
        vueRoute() {
            return this.$store.getters.vueRoute
        }
    }
}
</script>