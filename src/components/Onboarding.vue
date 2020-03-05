<template>
  <main class="onboarding">
    <header class="onboarding-header">
      <router-link to="/" class="onboarding-header__logo">
        <img src="@/assets/reach-business-logo.svg" alt="REACH for Business">
      </router-link>
    </header>
    <section class="onboarding-jumbotron text-center">
      <div class="container">
        <p class="caption text-white"> {{progress}} </p>
        <h1 class="onboarding-jumbotron__title text-white"> {{title}} </h1>
      </div>
    </section>
    <section class="container-fluid">
      <div class="onboarding-content">
        <slot />
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: "Onboarding",
    props: {
      progress: String,
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";
  .onboarding {
    min-height: 100vh;
    background: $snow;
  }
  .onboarding-header {
    padding: 1.25rem 0;
    text-align: center;
  }
  .onboarding-header__logo {
    display: inline-block;
    img {
      height: 2rem;
    }
  }
  .onboarding-jumbotron {
    background: $brand-gradient;
    padding: 2rem 0 7rem;
  }
  .onboarding-content {
    margin: -4rem auto 0;
    max-width: 25rem;
  }
  @include breakpoint-min(lg) {
    .onboarding-jumbotron {
      padding: 3rem 0 8rem;
    }
  }
</style>