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
  // DASHBOARD
  {
    path: '/dashboard',
    component: () => import("@/pages/Dashboard"),
    meta: { 
      layout: 'dashboard' ,
      headerTitle: 'Dashboard'
    }
  },
  // CHECKOUT WITH REACH
  {
    path: '/checkout',
    component: () => import("@/pages/checkout/CheckoutDashboard"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    }
  },
  {
    path: '/checkout/create-trans/1',
    component: () => import("@/pages/checkout/CreateTransactionStep1"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    }
  },
  {
    path: '/checkout/create-trans/2',
    component: () => import("@/pages/checkout/CreateTransactionStep2"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    }
  },
  {
    path: '/checkout/create-trans/3',
    component: () => import("@/pages/checkout/CreateTransactionStep3"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    }
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
    path: '/settings/add-staff',
    component: () => import("@/pages/settings/AddStaff"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings',
      backNav: true,
      backNavTitle: 'Go Back',
      backNavUrl: '/settings/staff-location'
    }
  },
  {
    path: '/settings/add-location',
    component: () => import("@/pages/settings/AddLocation"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings',
      backNav: true,
      backNavTitle: 'Go Back',
      backNavUrl: '/settings/staff-location'
    }
  },
  {
    path: '/all-cards',
    component: () => import("@/pages/AllCards")
  }
];