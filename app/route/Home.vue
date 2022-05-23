<template>
    <InterfaceLayout>
        <HelloWorld />
        <h2>{{routeData('test')}}</h2>
        <a href='/en/erreur'>Erreur</a>
        <input type='text' v-model="input" />
    </InterfaceLayout>
</template>

<script>
export default {
    mixins: [VueMixin],
    
    data: () => {
        return {
            input: 'test'
        }
    }
}
</script>

<style lang='scss' scoped>
h2 {
    color: green;
    text-decoration: underline;
}
</style>