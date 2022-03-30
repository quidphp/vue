<template>
    <h1>{{ text('errorTitle') }}</h1>
</template>

<script>
export default {
    mixins: [BaseMixin],
};
</script>

<style lang='scss' scoped>
h1 {
    color: $black;
}
</style>
