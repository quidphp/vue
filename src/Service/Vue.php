<?php
declare(strict_types=1);
namespace Project\Service;
use Quid\Base;
use Quid\Core;
use Quid\Main;
use Quid\Routing;

// vue
// classe en lien avec vue et les chargements des assets front-end
class Vue extends Main\Service
{
    // trait
    use Routing\_service;
    use Core\_bootAccess;


    // config
    protected static array $config = [];


    // isHot
    final protected function isHot():bool
    {
        $hot = static::boot()->path('hot');
        return Base\File::is($hot);
    }


    // getHotHost
    final protected function getHotSchemeHost():string
    {
        $hot = static::boot()->path('hot');
        return Base\File::lineFirst($hot);
    }


    // makePath
    final protected function makePath(string $return):string
    {
        if($this->isHot())
        {
            $schemeHost = $this->getHotSchemeHost();
            if(!empty($schemeHost) && Base\Uri::is($schemeHost))
            $return = $schemeHost.'/public/'.$return;
        }

        return $return;
    }


    // docOpenCss
    final public function docOpenCss():array
    {
        return [
            'app-vue'=>$this->makePath('css/app.css')
        ];
    }


    // docCloseJs
    final public function docCloseJs():array
    {
        return [
            'manifest'=>$this->makePath('js/manifest.js'),
            'app'=>$this->makePath('js/app.js'),
            'vendor'=>$this->makePath('js/app-vendor.js')
        ];
    }
}
?>