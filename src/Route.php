<?php
declare(strict_types=1);
namespace Project;
use Quid\Site;

// route
// abstract class for a route, all routes will extend this class
abstract class Route extends Site\Route
{
    // config
    protected static array $config = [
        '@app'=>[
            'jsInit'=>null,
            'docOpen'=>[
                'head'=>[
                    'css'=>[
                        'type'=>null],
                    'js'=>[
                        'type'=>null,
                        'component'=>null]]],
            '@dev'=>[
                'navigation'=>true]],
        '@cms'=>[
            '@dev'=>[
                'navigation'=>true]]
    ];
}
?>