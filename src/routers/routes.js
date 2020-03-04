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


  // SETTINGS
  {
    path: '/settings/checkout',
    component: () => import("@/pages/settings/CheckoutSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    }
  },
  {
    path: '/settings/organisation',
    component: () => import("@/pages/settings/OrganisationSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    }
  },
  {
    path: '/settings/account',
    component: () => import("@/pages/settings/AccountSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    }
  },
  {
    path: '/settings/staff-location',
    component: () => import("@/pages/settings/StaffLocationSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    }
  },

  {
    path: '/dashboard',
    component: () => import("@/pages/Dashboard"),
    meta: { 
      layout: 'dashboard' ,
      headerTitle: 'Dashboard'
    }
  },
  {
    path: '/all-cards',
    component: () => import("@/pages/AllCards")
  }
];