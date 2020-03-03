export const routes = [
  //AUTHENTICATION
  {
    path: '/sign-in',
    component: () => import("@/pages/authentication/SignIn")
  },
  {
    path: '/sign-up',
    component: () => import("@/pages/authentication/SignUp")
  },
  //ONBOARDING
  {
    path: '/onboarding/1',
    component: () => import("@/pages/onboarding/Step1")
  },
  {
    path: '/onboarding/2',
    component: () => import("@/pages/onboarding/Step2")
  },
  {
    path: '/onboarding/3',
    component: () => import("@/pages/onboarding/Step3")
  },
  {
    path: '/all-cards',
    component: () => import("@/pages/AllCards")
  }
];