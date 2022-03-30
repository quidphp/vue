const mix = require('laravel-mix');
mix.js('src/app.js', 'public/js/app.js');
mix.vue({ version: 3, extractStyles: 'public/css/app.css', globalStyles: 'src/core/style.scss' });

if (!mix.inProduction()) {
    mix.sourceMaps();
    mix.browserSync({
        proxy: 'https://vue3.test',
        files: ['src/*/*.js', 'src/*/*.vue'],
    });
}