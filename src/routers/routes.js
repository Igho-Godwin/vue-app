
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
   // LAYOUTS
   {
    path: '/marketing',
    meta: { layout: 'marketing' },
    component: () => import("@/components/pages/Marketing")
  },
];