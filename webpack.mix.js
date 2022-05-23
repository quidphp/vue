const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-polyfill');

mix.js('app/index.js', 'public/js/app.js');
mix.vue({ version: 3, globalStyles: 'app/app.scss', extractStyles: 'public/css/app.css', });
mix.extract(['vue', 'vuex', 'quidphp-navigation','quidphp-browser','quidphp-javascript'], 'public/js/app-vendor.js');
mix.alias({ '@': path.join(__dirname, 'app') });

if(mix.inProduction())
mix.polyfill({ enabled: true, useBuiltIns: false });

else
{
    mix.sourceMaps();
    const hmrOptions = { host: 'localhost', https: true, port: '8079' };
    mix.options({ hmrOptions });
}