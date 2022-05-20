<?php
declare(strict_types=1);

/*
 * Projet: Udeclic | https://udeclic.com
 * Auteur: Pierre-Philippe Emond | emondpph@gmail.com
 * Ce fichier de programmation est la propriété de La Haute Voltige.
 */
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