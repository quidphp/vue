<?php
declare(strict_types=1);
namespace Project\App;
use Quid\Site;

// home
// class for the home route of the app
class Home extends Site\App\Home
{
    // trait
    use _template;


    // config
    protected static array $config = [
        'component'=>'Home'
    ];


    // outputData
    final protected function outputData():array
    {
        return [];
    }
}
?>