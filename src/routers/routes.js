
export const routes = [{
  //authentications
    path: '/sign-in',
    component: () => import("@/components/authentications/SignIn")
  },
  //pages
  { 
    path: '/',
    component: () => import("@/components/pages/Landing")
  },
  { 
    path: '/dashboard',
    component: () => import("@/components/pages/Dashboard")
  }
];