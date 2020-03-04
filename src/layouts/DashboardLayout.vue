<template>
  <div class="dashboard-layout">
    <Sidebar userName="Mary Ekpe" companyName="Konga.com" :activeSidebar="isSidebarActive" />
    <Header @openSidebar="openSidebar()" />
    <main class="dashboard-main">
      <div class="container-fluid">
        <slot />
      </div>
    </main>
    <div class="sidebar-overlay" v-if="isSidebarActive" @click="closeSidebar()"></div>
  </div>
</template>

<script>
  import Header from "@/layouts/Header.vue";
  import Sidebar from "@/layouts/Sidebar.vue";

  export default {
    name: "Dashboard-Layout",
    data() {
      return {
        isSidebarActive: false
      }
    },
    components: {
      Header,
      Sidebar
    },
    methods: {
      openSidebar() {
        this.isSidebarActive = true;
      },
      closeSidebar() {
        this.isSidebarActive = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";
  
  .dashboard-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .dashboard-main {
    background: $snow;
    flex: 1 0 auto;
    padding: 1rem 0; 
  }

  // DESKTOP LAYOUT
  @include breakpoint-min(lg) {
    .dashboard-layout {
      padding-left: 17rem;
    }
    .dashboard-main {
      padding: 2rem 0;
    }
  }

  // MOBILE LAYOUT
  @include breakpoint-max(lg) {
    .sidebar-overlay {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba($pure-black, 0.6);
      z-index: 75;
      animation: overlay-fade .5s ease-in-out;
    }
  }
  @keyframes overlay-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>