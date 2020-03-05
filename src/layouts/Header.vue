<template>
  <header class="dashboard-header">
    <button class="sidebar-menu" @click="$emit('openSidebar')">
      <i class="fas fa-bars"></i>
    </button>
    <div class="dashboard-header__content">
      <div class="container-fluid" v-if="!backNav">
        <h3 class="dashboard-header__title"> {{title}} </h3>
      </div>
      <div class="container-fluid" v-else>
        <router-link :to="backNavUrl" class="dashboard-header__link">
          <h3 class="dashboard-header__title">
            <i class="fas fa-arrow-left mr-3"></i>
            {{backNavTitle}}
          </h3>
        </router-link>
      </div>
    </div>
  
  </header>
</template>

<script>
  export default {
    name: 'dashbord-header',
    props: {
      title: String,
      backNav: Boolean,
      backNavTitle: String,
      backNavUrl: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .dashboard-header {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 50;
    background: $white;
    border-bottom: 1px solid $smoke;
  }
  .dashboard-header__title {
    margin: 0;
  }
  .dashboard-header__link {
    text-decoration: none;
    color: $main-text;
  }
  .sidebar-menu {
    display: none;
  }
  .dashboard-header__content {
    flex: 1 0 auto;
    padding: 1rem 0;
  }

  // MOBILE HEADER
  @include breakpoint-max(lg) {
    .dashboard-header {
      margin-top: .25rem;
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: -.25rem;
        left: 0;
        height: .25rem;
        width: 100%;
        background: $brand-gradient;
      }
    }
    .sidebar-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: unset;
      border-right: 1px solid $smoke;
      font-size: 1.25rem;
      width: 3.25rem;
      line-height: 1;
      padding: 1rem;
      -webkit-text-stroke: 1px $white;
      color: $main-text;
      outline: unset;
    }
  }

  // DESKTOP HEADER
  @include breakpoint-min(lg) {
    .dashboard-header__content {
      padding: 2rem 0;
    }
  }
</style>