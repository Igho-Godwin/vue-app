<template>
  <nav class="settings-nav">
    <router-link :class="(link.isActive) ? 'settings-nav__link settings-nav__link--active' : 'settings-nav__link'" v-for="link in navLinks" :key="link.id" :to="link.url"> {{ link.name }} </router-link>
  </nav>
</template>


<script>
export default {
  name: "Settings-Nav",
  data() {
    return {
      navLinks: [
        {
          name: 'Checkout',
          url: '/settings/checkout',
          isActive: false
        },
        {
          name: 'Organisation',
          url: '/settings/organisation',
          isActive: false
        },
        {
          name: 'Account',
          url: '/settings/account',
          isActive: false
        },
        {
          name: 'Staff & Locations',
          url: '/settings/staff-location',
          isActive: false
        },
      ]
    }
  },
  props: {
    activeNav: Number
  },
  methods: {
    updateActiveNav() {
      if(this.activeNav === 1) {
        this.navLinks[0].isActive = true;
      } 
      else if (this.activeNav === 2) {
        this.navLinks[1].isActive = true;
      }
      else if (this.activeNav === 3) {
        this.navLinks[2].isActive = true;
      }
      else if (this.activeNav === 4) {
        this.navLinks[3].isActive = true;
      }
    }
  },
  mounted() {
    this.updateActiveNav();
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";
  .settings-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background: $white;
    padding: 0 1rem;
    overflow: auto;
  }
  .settings-nav__link {
    padding: 1rem;
    text-decoration: none;
    color: $main-text;
    border-right: 1px solid $smoke;
    position: relative;
    white-space: nowrap;
    &.settings-nav__link--active {
      color: $red;
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: .125rem;
        width: 100%;
        background: $red;
        left: 0;
        bottom: 0;
      }
    }
  }

  @include breakpoint-min(lg) {
    .settings-nav {
      padding: 0 1rem;
    }
    .settings-nav__link {
      padding: 1.5rem;
    }
  }
</style>