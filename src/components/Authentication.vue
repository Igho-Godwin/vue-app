<template>
  <main class="authentication">
    <section class="authentication__image" :style="{'background-image': 'url(' + require('@/assets/' + authBG ) + ')'}"></section>
    <section class="authentication__content">
      <div class="content-wrap">
        <router-link to="/" class="reach-business-logo">
          <img src="@/assets/reach-business-logo.svg" alt="REACH Business">
        </router-link>
        <div class="authentication__heading">
          <h1 class="authentication__title">{{ title }}</h1>
          <slot name="explainer"></slot>
        </div>
        <!-- Main content comes here -->
        <slot />
      </div>
    </section>
  </main>
</template>


<script>
export default {
  name: "Authentication",
  props: {
    title: String,
    authBG: String
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .authentication {
    display: flex;
    min-height: 100vh;
  }
  .authentication__image {
    display: none;
  }
  .authentication__content {
    flex: 1 0 auto;  
  }
  .content-wrap {
    max-width: 25rem;
    margin: 0 auto;
    padding: 1.25rem;
  }
  .reach-business-logo {
    display: inline-block;
    img {
      height: 2rem;
      max-width: 16.9375rem;
      width: 100%;
    }
  }
  .authentication__heading {
    margin-top: 4.5rem;
    margin-bottom: 3rem;
  }

  @include breakpoint-min(lg) {
    .authentication__image {
      display: block;
      background-color: $snow;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: calc(100% / 3);
    }
    .content-wrap {
      padding-top: 4rem;
    }
    .reach-business-logo img{
      height: 2.5rem;
    }
    .authentication__heading {
      margin-top: 6.25rem;
    }
  }
</style>