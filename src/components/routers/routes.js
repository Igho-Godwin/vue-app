
export const routes = [{
  //authentications
    path: '/sign-in',
    component: () => import("@/components/authentications/Sign")
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