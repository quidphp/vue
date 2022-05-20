<?php
declare(strict_types=1);
namespace Project\Row;
use Quid\Site;

// user
// class for a row of the user table
class User extends Site\Row\User
{
    // config
    protected static array $config = [];


    // output
    final public function output():array
    {
        return [
            'id'=>$this->id(),
            'username'=>$this->username(),
            'role'=>$this->role()->output(),
            'fullName'=>$this->fullName()
        ];
    }
}
?>