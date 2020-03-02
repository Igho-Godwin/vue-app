<template>
  <div>
    <p class="onboarding__step">STEP 1 OF 3</p>
    <h1 class="onboarding__topic">Welcome!</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="onboarding__card">
          <div class="card__gif"></div>
          <p class="onboarding__card--text">Welcome to REACH for Business, you can post your deals, and see reviews from
            your customers. </p>
          <button type="submit" class="btn btn-blue btn-block">Setup Company</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/scss/vendors/themed-bootstrap.scss";
  @import "@/scss/main.scss";

  .onboarding__step {
    margin-bottom: 1rem;
    padding-top: 2rem;

    @include breakpoint-min(lg) {
      margin-bottom: 1.25rem;
      padding-top: 3rem;
    }
  }

  .onboarding__card {
    max-width: 20.5rem;
    width: 100%;
    background: $white;
    position: absolute;
    top: 9rem;
    padding: 1rem 1rem 2rem 1rem;
    color: $main-text;

    @include breakpoint-min(lg) {
      top: 11.25rem;
      max-width: 22.5rem;
      padding: 2rem 1.5rem 2rem 1.5rem;
    }
  }

  .card__gif {
    max-width: 18.5rem;
    width: 100%;

    @include breakpoint-min (lg) {
      max-width: 19.5rem;
    }
  }

  .onboarding__card--text {
    margin-bottom: 3rem;
  }
</style>