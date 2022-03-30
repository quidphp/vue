// baseMixin
const BaseMixin = {
    computed: {
        text() {
            return this.$store.getters.text;
        },
    },

    methods: {
        d(value) {
            d(value);
        },
    },
};

export { BaseMixin };
