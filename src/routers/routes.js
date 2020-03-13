import store from '../store.js';
export const routes = [
  //AUTHENTICATION
  {
    name: 'sign-in',
    path: '/sign-in',
    component: () => import("@/pages/authentication/SignIn")
  },
  {
    path: '/sign-up',
    component: () => import("@/pages/authentication/SignUp")
  },
  //ONBOARDING
  {
    name: 'onboarding_1',
    path: '/onboarding/1',
    component: () => import("@/pages/onboarding/Step1"),
    beforeEnter: (to, from, next) => {
        if(store.state.store[0].user == ''){
           next({path:'/sign-in'});
        } 
        else{
           next();
        } 
    }
  },
  {
    path: '/onboarding/2',
    component: () => import("@/pages/onboarding/Step2"),
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
   }
  },
  {
    path: '/onboarding/3',
    component: () => import("@/pages/onboarding/Step3"),
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
    }
  },
  // DASHBOARD
  {
    path: '/dashboard',
    component: () => import("@/pages/Dashboard"),
    meta: { 
      layout: 'dashboard' ,
      headerTitle: 'Dashboard'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
    }
  },
  {
    path: '/',
    component: () => import("@/pages/Dashboard"),
    meta: { 
      layout: 'dashboard' ,
      headerTitle: 'Dashboard'
    }
  },
  // CHECKOUT WITH REACH
  {
    path: '/transaction',
    component: () => import("@/pages/checkout/TransactionDashboard"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
      
    }
  },
  {
    path: '/checkout/create-trans/1',
    component: () => import("@/pages/checkout/CreateTransactionStep1"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH',
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
      
    }
  },
  {
    path: '/checkout/create-trans/2',
    component: () => import("@/pages/checkout/CreateTransactionStep2"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
      
    }
  },
  {
    path: '/checkout/create-trans/3',
    component: () => import("@/pages/checkout/CreateTransactionStep3"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
      
    }
  },
  {
    path: '/checkout/create-trans/4',
    component: () => import("@/pages/checkout/CreateTransactionStep4"),
    meta: {
      layout: 'dashboard',
      headerTitle: 'Checkout with REACH'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 

    }
  },

  // SETTINGS
  {
    path: '/settings/checkout',
    component: () => import("@/pages/settings/CheckoutSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
    }
  },
  {
    path: '/settings/organisation',
    component: () => import("@/pages/settings/OrganisationSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
    }
  },
  {
    path: '/settings/account',
    component: () => import("@/pages/settings/AccountSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
    }
  },
  {
    path: '/settings/staff-location',
    component: () => import("@/pages/settings/StaffLocationSetting"),
    meta: { 
      layout: 'dashboard',
      headerTitle: 'Settings'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
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
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
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
    },
    beforeEnter: (to, from, next) => {
      if(store.state.store[0].user == ''){
         next({path:'/sign-in'});
      } 
      else{
         next();
      } 
    }
  },
  {
    path: '/all-cards',
    component: () => import("@/pages/AllCards")
  },
];