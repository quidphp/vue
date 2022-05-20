<template>
    <InterfaceLayout>
        <HelloWorld />
        <h2>{{routeData('test')}}</h2>
        <a href='/en/erreur'>Erreur</a>
    </InterfaceLayout>
</template>

<script>
export default {
    mixins: [VueMixin]
}
</script>