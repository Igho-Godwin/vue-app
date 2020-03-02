<template>
  <section class="onboarding">
   <slot />
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import "@/scss/vendors/themed-bootstrap.scss";
  @import "@/scss/main.scss";

  .onboarding {
    color: $white;
      position: relative;
     &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 12.875rem;
        z-index: -1;
        background-image: linear-gradient(100deg, #9700c8, #ff9f00 100%);
        @include breakpoint-min(lg) {
          height: 15.375rem;
        }
      }
  }

</style>

