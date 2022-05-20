<template>
    <h1 :class="{selected: h1Selected}" @click="clickH1">Hello world</h1>
</template>

<script>
export default {
    data: () => ({
        h1Selected: false
    }),
    
    methods: {
        clickH1() {
            this.h1Selected = true;
        }
    }
}
</script>

<style lang='scss' scoped>
h1 {
    @include transition(color);
    cursor: pointer;
    color: $color;
    
    &:hover {
        color: green;
    }
    
    &.selected {
        color: pink;
    }
}

@include responsive() {
    h1 {
        color: yellow;
    }
}
</style>