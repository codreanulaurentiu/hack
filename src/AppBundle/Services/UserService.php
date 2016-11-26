<?php

namespace AppBundle\Services;

class UserService
{

    public function __construct(\Doctrine\ORM\EntityManager $em)
    {
        $this->em = $em;
    }

    public function checkUser($username, $password)
    {
        $user = $this->em->getRepository('AppBundle:User')->findOneBy(['username' => $username, 'password' => md5($password)]);

        if ($user instanceof \AppBundle\Entity\User) {
            return true;
        }

        return false;
    }
}