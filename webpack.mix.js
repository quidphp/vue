const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.js('vue/app.js', 'public/js/app.js');
mix.vue({ version: 3, globalStyles: 'vue/app.scss', extractStyles: 'public/css/app.css', });
mix.extract(['vue', 'vuex', 'quidphp-navigation'], 'public/js/app-vendor.js');

if(mix.inProduction())
mix.polyfill({ enabled: true, useBuiltIns: false });

else
{
    mix.sourceMaps();
    const hmrOptions = { host: 'localhost', https: true, port: '8079' };
    mix.options({ hmrOptions });
}