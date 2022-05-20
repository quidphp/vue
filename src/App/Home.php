<?php
declare(strict_types=1);
namespace Project\App;
use Quid\Base\Html;
use Quid\Site;

// home
// class for the home route of the app
class Home extends Site\App\Home
{
    // trait
    use _template;


    // config
    protected static array $config = [
        'vue'=>'Home'
    ];
}
?>