// mixin

// vueMixin
export default {
    computed: {
        session() {
            return this.$store.getters.session;
        },

        flash() {
            return this.$store.getters.flash;
        },

        langText() {
            return this.$store.getters.langText;
        },

        routeData() {
            return this.$store.getters.routeData;
        },
    },

    methods: {
        d(value) {
            d(value);
        },
    },
};