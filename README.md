# QuidPHP/Vue
[![Release](https://img.shields.io/github/v/release/quidphp/vue)](https://packagist.org/packages/quidphp/vue)
[![License](https://img.shields.io/github/license/quidphp/vue)](https://github.com/quidphp/vue/blob/master/LICENSE)
[![PHP Version](https://img.shields.io/packagist/php-v/quidphp/vue)](https://www.php.net)
[![Style CI](https://styleci.io/repos/475987025/shield)](https://styleci.io)
[![Code Size](https://img.shields.io/github/languages/code-size/quidphp/vue)](https://github.com/quidphp/vue)

## About
**QuidPHP/Vue** repository contains the necessary structure to create a new project using QuidPHP, LemurCMS and VueJs.

## License
**QuidPHP/Vue** is available as an open-source software under the [MIT license](LICENSE).

## Documentation
**QuidPHP/Vue** documentation is available at [QuidPHP/Docs](https://github.com/quidphp/docs).

## Installation
**QuidPHP/Vue** can be easily installed with [Composer](https://getcomposer.org). It is available on [Packagist](https://packagist.org/packages/quidphp/vue).
``` bash
$ composer create-project quidphp/vue --prefer-dist
```

## Requirement
**QuidPHP/Vue** requires the following:
- Apache or Nginx server (running on MacOs or Linux environment). 
    - Works in Windows environment but there are **known issues**.
- PHP 8.1 
    - with these extensions:
        - ctype
        - curl
        - date
        - fileinfo
        - gd
        - iconv
        - json
        - mbstring
        - pcre
        - openssl
        - session
        - SimpleXML
        - zip
        - PDO
        - pdo_mysql
    - and these PHP INI directives
        - *post_max_size* must be at least 1MB
        - *post_max_size* must be larger than *upload_max_filesize*
        - *memory_limit* must be at least 128MB
- Mysql (>= 8.0) or MariaDB (>= 10.4) database
- NodeJs LTS version (>= 16)
- Any modern browser (not Internet Explorer)

## Dependency
**QuidPHP/Assert** has the following dependencies:
- [quidphp/site](https://github.com/quidphp/site) - Quid\Site - Extended platform to build a website using the QuidPHP framework and LemurCMS
- [quidphp/navigation](https://github.com/quidphp/navigation) - Javascript module for navigating a website without reloading
- [vuejs/vue](https://github.com/vuejs/vue) - Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
- [vuejs/vuex](https://github.com/vuejs/vuex) - Centralized State Management for Vue.js.
- [laravel-mix/laravel-mix](https://github.com/laravel-mix/laravel-mix) - The power of webpack, distilled for the rest of us
- [scottcharlesworth/laravel-mix-polyfill](https://github.com/scottcharlesworth/laravel-mix-polyfill) - Quid\Main - A Laravel Mix extension to include polyfills by using Babel, core-js, and regenerator-runtime
- [sass/dart-sass](https://github.com/sass/dart-sass) - The reference implementation of Sass, written in Dart.
- [webpack-contrib/sass-loader](https://github.com/webpack-contrib/sass-loader) - Compiles Sass to CSS
- [shakacode/sass-resources-loader](https://github.com/shakacode/sass-resources-loader) - SASS resources (e.g. variables, mixins etc.) loader for Webpack.
- [vuejs/vue-loader](https://github.com/vuejs/vue-loader) - Webpack loader for Vue.js components

All dependencies will be resolved by using the [Composer](https://getcomposer.org) installation process.

## Setup
Once the installation is complete, simply follow these steps:
1. Make sure the [storage](storage) and [public](public) folders are writable by your web server. For [storage](storage) also make sure all subdirectories are writable.
2. Configure an Apache Virtual Host or Nginx Server Block in order to have a domain pointing to the [public](public) folder document root.
3. Import [db.sql](db.sql) within a new Mysql/MariaDB database.
4. Duplicate the [env-default.php](env-default.php) file and rename it to **env.php**.
5. Update the scheme hosts within the **env.php** file. You will need to set a different host (domain or subdomain) for the application and the CMS.
6. Update the database parameters within the **env.php** file.
7. Not required, but you are encouraged to change the namespace of all PHP classes within the [src](src) folder. The default namespace is Project.

## Booting via Webpack/HTTP
Open the project folder in the Command Line. To start the development server with hot module reload (HMR) write:
``` bash
npm run hot
```
Your application will be reachable at the defined host within your *env.php* file. A second Node server is also started to serve the HMR requests (defaults to localhost on port 8079). You may need to accept the self-signed certificate for that localhost.

## Webpack production build
To generate the production build for the Vue application, open the project folder in the Command Line and write:
``` bash
npm run prod
```

## QuidPHP CLI routes
Open the project folder in the Command Line. You may now submit a command in the following format: 
``` bash
php quid [path][:envType]
exemple:
php quid /en/my-url
php quid /en/my-url:dev/cms
php quid /:prod/app
```

## LemurCMS credentials
Once you open the CMS within your browser, you will need to login. The default user is:
- Username: **admin** 
- Password: **changeme123**

Once you are logged in, you will be able to change the password for the user and create new users.

## Overview
**QuidPHP/Project** contains 30 files. Here is an overview:
- [.gitignore](.gitignore) - Standard .gitignore file for the project
- [composer.json](composer.json) - File declaring all Composer PHP dependencies
- [db.sql](db.sql) - Minimal database structure required
- [env-default.php](env-default.php) - Declare environment data for the application, copy this file and rename to env.php
- [LICENSE](LICENSE) - MIT License file for the repository
- [package.json](package.json) - File declaring all NPM dependencies
- [quid](quid) - File for booting the application and Cms via CLI
- [README.md](README.md) - This readme file in markdown format
- [webpack.mix.js](webpack.mix.js) - Configuration file for laravel-mix
- [storage/public/favicon.ico](storage/public/favicon.ico) - Generic favicon (16x16), this will be symlinked to *public/favicon.ico*.
- [public/.htaccess](public/.htaccess) - Simple apache directive file, requires mod_rewrite
- [public/index.php](public/index.php) - Index file for booting the application and Cms via an HTTP request
- [src/Boot.php](src/Boot.php) - Class for booting the application and CMS
- [src/Route.php](src/Route.php) - Abstract class for a route, all routes will extend this class
- [src/Row.php](src/Row.php) - Abstract class for a row, all rows will extend this class
- [src/Session.php](src/Session.php) - Class used to represent the active session
- [src/App/_template.php](src/App/_template.php) - Trait used by all routes which generate an interface
- [src/App/Error.php](src/App/Error.php) - Class for the error route of the app
- [src/App/Home.php](src/App/Home.php) - Class for the home route of the app
- [src/Row/User.php](src/Row/User.php) - Class for a row of the user table
- [src/Service/Vue.php](src/Service/Vue.php) - Class related to vue and the loading of front-end assets
- [app/app.scss](app/app.scss) - Main scss stylesheet for the app, injected in the components
- [app/app.vue](app/app.vue) - Root component which loads the correct route
- [app/global.js](app/global.js) - Script which declares some global variables
- [app/index.js](app/index.js) - Entry file for the Vue application
- [app/store.js](app/store.js) - Contains Vuex getters and mutations available globally
- [app/component/HelloWorld.vue](app/component/HelloWorld.vue) - Component for a hello world in a h1 tag
- [app/interface/Layout.vue](app/interface/Layout.vue) - Component for the common page layout
- [app/route/Error.vue](app/route/Error.vue) - Component for the error route
- [app/route/Home.vue](app/route/Home.vue) - Component for the home route

## Known issues
- On Windows, there are some problems related to creating symlinks.
- On Windows, you will need to add *lower_case_table_names* = 2 in your database configuration file (my.cnf). The table and column names need to be stored in their natural case.

## Testing
**QuidPHP** testsuite can be run by creating a new [QuidPHP/Assert](https://github.com/quidphp/assert) project.