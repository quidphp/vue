<?php
declare(strict_types=1);
namespace Project\App;
use Quid\Base;
use Quid\Base\Html;

// _template
// trait used by all routes which generate an interface
trait _template
{
    // config
    protected static array $configTemplate = [
        'component'=>null,
        'debugJs'=>false,
        'debugPhp'=>false
    ];


    // trigger
    final public function trigger()
    {
        $return = null;
        $request = $this->request();

        if($this->shouldDebug('php'))
        {
            $state = Base\Obj::cast($this->getState());
            Base\Debug::deads($state);
        }

        if($request->isAjax())
        $return = $this->outputJson();

        else
        $return = $this->template();

        return $return;
    }


    // template
    final protected function template():string
    {
        $r = $this->docOpen();

        $attr = [];
        $attr['data-state'] = $this->getState();
        $attr[] = '#app';

        $r .= Html::div(null,$attr);
        $r .= $this->docClose();

        return $r;
    }


    // shouldDebug
    final public function shouldDebug(string $type):bool
    {
        $key = 'debug'.ucfirst($type);
        return $this->getAttr($key) === true;
    }


    // getComponent
    final protected function getComponent():string
    {
        return $this->getAttr('component',true) ?? static::className(false);
    }


    // getState
    final protected function getState():array
    {
        $boot = static::boot();

        $return = [
            'env'=>$boot->env(),
            'version'=>$boot->version(true,false),
            'type'=>$boot->type(),
            'timestamp'=>Base\Datetime::now(),
            'debug'=>$this->shouldDebug('js'),
            'navigation'=>static::allowNavigation(),
            'route'=>$this->outputJson()
        ];

        return $return;
    }


    // outputJson
    final protected function outputJson():array
    {
        $boot = static::boot();
        $request = $this->request();
        $session = static::session();
        $error = ($this->classFqcn() === Error::class)? 'route':null;

        $return = [
            'fqcn'=>static::class,
            'component'=>$this->getComponent(),
            'error'=>$error,
            'code'=>Base\Response::code(),
            'timestamp'=>Base\Datetime::now(),
            'lang'=>$boot->lang()->currentLang(),
            'requestId'=>$request->id(),
            'responseId'=>Base\Response::id(),
            'uri'=>$request->uri(),
            'doc'=>$this->outputDoc(),
            'session'=>$session->output(),
            'langText'=>$this->outputLangText(),
            'com'=>$this->outputCom(),
            'flash'=>$this->outputFlash(),
            'data'=>$this->outputData()
        ];

        return $return;
    }


    // outputLangText
    final protected function outputLangText():array
    {
        $lang = static::lang();
        $name = static::className(true);
        $texts = $lang->take($name) ?? [];
        $return = Base\Arrs::replace($texts,$this->outputLang());

        return $return;
    }


    // outputDoc
    final protected function outputDoc():array
    {
        $closure = $this->cacheReplaceClosure();
        $prepare = $this->prepareDocOpen();
        $map = fn($value) => (is_string($value))? $closure($value):$value;
        $meta = $prepare['head']['meta'];
        $meta = Html::metaFromArray($meta,false);

        $return = [
            'htmlAttr'=>$prepare['html'],
            'title'=>$prepare['head']['title'],
            'meta'=>$meta,
            'bodyAttr'=>$prepare['body'],
            'routeWrapAttr'=>null
        ];

        return Base\Arrs::map($return,$map);
    }


    // outputCom
    final protected function outputCom():string
    {
        $com = static::session()->com();
        return $com->flush();
    }


    // outputFlash
    protected function outputFlash():array
    {
        $flash = static::session()->flash();
        $key = ($this->hasMethod('getFlashKey'))? $this->getFlashKey():$this;
        return $flash->get($key) ?? [];
    }


    // outputData
    protected function outputData():array
    {
        return [];
    }


    // outputLang
    protected function outputLang():array
    {
        return [];
    }
}
?>