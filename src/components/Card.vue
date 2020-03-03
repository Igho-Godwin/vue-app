<template>
  <div class="card">
    <h3 class="card-header">{{header}}</h3>
    <div class="card-body">
      <slot name="card-body" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['header']
  }
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";
  .card {
    background: $white;
    border: 1px solid $smoke;
    border-radius: .25rem;
  }

  .card-header {
    padding: 1.5rem 1rem 0 1rem;
  @include breakpoint-min(lg) {
    padding: 2.25rem 1.5rem 0 1.5rem;
  }
  }

  .card-body {
    padding: 1.25rem 1rem;
  }
  @include breakpoint-min(lg) {
    .card-body {
      padding: 2rem 1.5rem;
    }
  }
</style>