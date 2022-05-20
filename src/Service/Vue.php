<?php
declare(strict_types=1);

/*
 * Projet: Udeclic | https://udeclic.com
 * Auteur: Pierre-Philippe Emond | emondpph@gmail.com
 * Ce fichier de programmation est la propriété de La Haute Voltige.
 */

namespace Project\Service;
use Quid\Main;
use Quid\Routing;

// vue
// classe en lien avec vue et les chargements des assets front-end
class Vue extends Main\Service
{
    // trait
    use Routing\_service;


    // config
    protected static array $config = [];


    // docOpenCss
    final public function docOpenCss():array
    {
        return [
            'app-vue'=>'css/app.css'
        ];
    }


    // docCloseJs
    final public function docCloseJs():array
    {
        return [
            'manifest'=>'js/manifest.js',
            'app-vendor'=>'js/app-vendor.js',
            'app'=>'js/app.js'
        ];
    }
}
?>