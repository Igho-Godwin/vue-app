<template>
  <div class="dashboard-sidebar" :class="(activeSidebar) ? 'dashboard-sidebar--active' : '' ">
    <div class="sidebar-header text-center">
      <router-link to="/" class="sidebar-header__logo">
        <img src="@/assets/myAdvantage.png" alt="myAdvantage Health">
      </router-link>
      <h3> {{companyName}} </h3>
      <p class="caption"> {{userName}} </p>
    </div>
    <nav class="sidebar-nav">
      <a v-for="link in navLinks" :key="link.id" :href="link.url" class="sidebar-nav__link" :class="(link.active) ? 'sidebar-nav__link--active' : '' ">
        <div class="sidebar-nav__link-icon">
          <img :src="require('@/assets/icons/' + link.icon + '.svg' )">
        </div>
        <span class="sidebar-nav__link-name">{{link.name}}</span>
      </a>
    </nav>
    <button class="log-out-btn sidebar-nav__link" title="Sign Out">
        <img class="sidebar-nav__link-icon" src="@/assets/icons/sign-out.svg">
        <span class="sidebar-nav__link-name">Sign Out</span> 
      </button>
    <div class="sidebar-footer">
      <img class="sidebar-footer__icon" src="@/assets/reach-business-logo.svg" alt="REACH for Business">
    </div>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {
        navLinks: [
          {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'home',
            active: false
          },
          {
            name: 'Transactions',
            url: '/transaction',
            icon: 'checkout',
            active: false
          },
          {
            name: 'Settings',
            url: '/settings/checkout',
            icon: 'settings',
            active: false
          },
        ]
      }
    },
    props: {
      userName: String,
      companyName: String,
      activeSidebar: Boolean,
      activeNav: String
    },
    methods: {
      updateActiveNavClass() {
        if ( this.activeNav === "Dashboard" ) {
          this.navLinks[0].active = true
        } 
        else if ( this.activeNav === "Checkout with REACH" ) {
          this.navLinks[1].active = true
        }
        else if ( this.activeNav === "Settings" ) {
          this.navLinks[2].active = true
        }
      }
    },
    mounted() {
      this.updateActiveNavClass()
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .dashboard-sidebar {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: -100%;
    top: 0;
    width: 100%;
    max-width: 17rem;
    height: 100vh;
    background: $white;
    z-index: 100;
    transition: .5s ease-in-out;
    &.dashboard-sidebar--active {
      left: 0;
    }
  }
  .sidebar-header {
    position: relative;
    padding: .875rem 1.5rem;
    border-bottom: 1px solid $smoke;
  }
  .sidebar-header__logo {
    display: inline-block;
    img {
      height: 1.75rem;
    }
  }

  .sidebar-nav {
    margin-top: 1.5rem;
    display: block;
    position: relative;
    flex: 1 0 auto;
  }
  .sidebar-nav__link {
    display: flex;
    position: relative;
    align-items: center;
    padding: 1rem 1.25rem 1rem 1.625rem;
    color: $secondary-text;
    text-decoration: none;
    font-weight: 600;
    font-size: .875rem;
    line-height: 1.5rem;
    &:hover {
      background: rgba($red, .04);
    }

    &.sidebar-nav__link--active {
      background: rgba($red, .04);
      color: $black;
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        height: 100%;
        width: 0.1875rem;
        background: $red;
      }
    }
  }
  .sidebar-nav__link-icon {
    display: flex;
    height: 1.5rem;
    width: 1.75rem;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
  }
  
  .log-out-btn {
    background: unset;
    border: unset;
    padding: .5rem .75rem;
  }

  // DESKTOP SIDEBAR
  @include breakpoint-min(lg) {
    .dashboard-sidebar {
      border-right: 1px solid $smoke;
      left: 0;
    }
    .sidebar-header {
      padding: 1.625rem;
      margin: unset;
      &::before {
        content: none;
      }
    }

    .sidebar-header__logo {
      img {
        height: 2rem;
      }
    }
    .sidebar-nav__link {
      padding: 1.25rem  1.25rem 1.25rem 1.625rem;
      font-size: 1rem;
    }
    .sidebar-nav__link-icon {
      width: 2rem;
      margin-right: .75rem;
    }
    .sidebar-footer {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      display: flex;
      padding: 1rem;
      border-top: 1px solid $smoke;
    }

    .sidebar-footer__icon {
      max-width: 13rem;
      width: 100%;
      margin: 0 auto;
    }
    
  }
</style>