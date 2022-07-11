<!-- root component which loads the correct route -->
<template>
    <component :is="vueRoute" />
</template>

<script>
export default {
    computed: {
        vueRoute() {
            return this.$store.getters.vueRoute
        }
    }
}
</script>