<template>
  <div class="card">
    <div class="card-body">
      <slot name="card-body" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card"
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
  .card-body {
    padding: 1.25rem 1rem;
  }
  @include breakpoint-min(lg) {
    .card-body {
      padding: 2rem 1.5rem;
    }
  }
</style>