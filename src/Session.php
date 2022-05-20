<?php
declare(strict_types=1);
namespace Project;
use Quid\Lemur;

// session
// classe pour représenter la session courante
class Session extends Lemur\Session
{
    // output
    final public function output():array
    {
        $user = $this->user();
        $role = $this->role();

        return [
            'csrf'=>$this->csrf(),
            'user'=>$user->output(),
            'role'=>$role->name(),
            'roleLabel'=>$role->label(),
            'permission'=>$role->permission()
        ];
    }
}
?>