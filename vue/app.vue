<template>
    <component :is="vueRoute" />
</template>

<script>
export default {
    mixins: [VueMixin],
    
    computed: {
        vueRoute() {
            return this.$store.getters.vueRoute
        }
    }
}
</script>