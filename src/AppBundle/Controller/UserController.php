<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Form\LoginType;
use AppBundle\Form\RegisterType;
use AppBundle\Form\UserType;
use AppBundle\Services\UserService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;


class UserController extends Controller
{

    /**
    * @Route("/login", name="user_login")
    */
    public function loginAction(Request $request)
    {
        $form = $this->createForm(LoginType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UserService $userService */
            $userService = $this->get('user_service');
            if ($userService->checkUser($request->request->get('login')['Username'], $request->request->get('login')['Password'])) {
                /** @var User $user */
                $user = $this->get('doctrine')->getRepository('AppBundle:User')->findOneBy(['username' => $request->request->get('login')['Username']]);
                $token = new UsernamePasswordToken($user, $user->getPassword(), "public", [$user->getRoles()]);
                $event = new InteractiveLoginEvent($request, $token);
                $this->get("event_dispatcher")->dispatch("security.interactive_login", $event);
                $session = $request->getSession();
                $session->set('user', $user->getUsername());

                return $this->redirectToRoute('homepage');
            }
        }

        return $this->render(
            'user/login.html.twig',
            array('form' => $form->createView())
        );
    }

    /**
     * @Route("/register", name="user_registration")
     */
    public function registerAction(Request $request)
    {
        $user = new User();
        $form = $this->createForm(RegisterType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {

            $password = $this->get('security.password_encoder')
                ->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($password);
            $user->setRoles('user');
            $user->setFirstName($user->getUsername());
            $user->setLastName($user->getUsername());

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('user_login');
        }

        return $this->render(
            'user/register.html.twig',
            array('form' => $form->createView())
        );
    }
}
