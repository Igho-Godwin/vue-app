
export const routes = [{
  //authentications
    path: '/sign-in',
    component: () => import("@/components/authentications/SignIn"),
    meta: { layout: "auth" }
  },
  //PAGES
  { 
    path: '/dashboard',
    meta: {layout: 'dashboard'},
    component: () => import("@/components/pages/Dashboard")
  },
  {
    path: '/sign-up',
    component: () => import("@/components/authentications/SignUp"),
    meta: {layout: 'auth'}
  },
  {
    path: '/onboarding-add-info',
    component: () => import("@/components/onboardings/OnboardingAddInfo"),
    meta: {layout: 'onboarding'}
  },
  {
    path: '/onboarding-upload-logo',
    component: () => import("@/components/onboardings/OnboardingUploadLogo"),
    meta: {layout: 'onboarding'}
  },
  {
    path: '/onboarding-welcome',
    component: () => import("@/components/onboardings/OnboardingWelcome"),
    meta: {layout: 'onboarding'}
  }
];