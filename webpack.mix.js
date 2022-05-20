const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.js('vue/app.js', 'public/js/app.js');
mix.vue({ version: 3, extractStyles: 'public/css/app.css' });
mix.polyfill({ enabled: true, useBuiltIns: false });
mix.extract(['vue', 'vuex'], 'public/js/app-vendor.js');

if (!mix.inProduction()) {
    mix.sourceMaps();
    mix.browserSync({
        proxy: 'https://vue3.test',
        files: ['src/*/*.js', 'src/*/*.vue'],
    });
}