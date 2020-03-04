<template>
  <div class="dashboard-sidebar" :class="(activeSidebar) ? 'dashboard-sidebar--active' : '' ">
    <div class="sidebar-header">
      <router-link to="/" class="sidebar-header__logo">
        <img src="@/assets/reach-business-logo.svg" alt="REACH for Business">
      </router-link>
    </div>
    <nav class="sidebar-nav">
      <router-link v-for="link in navLinks" :key="link.id" :to="link.url" class="sidebar-nav__link" :class="(link.active) ? 'sidebar-nav__link--active' : '' ">
        <div class="sidebar-nav__link-icon">
          <img :src="require('@/assets/icons/' + link.icon + '.svg' )">
        </div>
        <span class="sidebar-nav__link-name">{{link.name}}</span>
      </router-link>
    </nav>
    <div class="sidebar-footer">
      <div class="company-logo">
        <img :src="companyLogo">
      </div>
      <div class="user-info">
        <p class="user-info__name"> {{userName}} </p>
        <p class="user-info__company-name"> {{companyName}} </p>
      </div>
      <button class="log-out-btn" title="Sign Out">
        <img src="@/assets/icons/sign-out.svg">
      </button>
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
            active: true
          },
          {
            name: 'Checkout',
            url: '/checkout',
            icon: 'checkout',
            active: false
          },
          {
            name: 'Deals',
            url: '/deals',
            icon: 'deals',
            active: false
          },
          {
            name: 'Reviews',
            url: '/reviews',
            icon: 'reviews',
            active: false
          },
          {
            name: 'Market Insights',
            url: '/market-insights',
            icon: 'market-insight',
            active: false
          },
          {
            name: 'Settings',
            url: '/settings',
            icon: 'settings',
            active: false
          },
        ]
      }
    },
    props: {
      userName: String,
      companyName: String,
      companyLogo: String,
      activeSidebar: Boolean
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
  .sidebar-footer {
    display: flex;
    padding: 1rem;
    border-top: 1px solid $smoke;
  }
  .company-logo {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background: $dark-snow;
  }
  .user-info {
    padding: 0 1rem;
    flex: 1 0 auto;
  }
  .user-info__name {
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
  }
  .user-info__company-name {
    margin: 0;
    font-size: .75rem;
    color: $secondary-text;
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
    }
    
  }
</style>