<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col pt-3">
        <Card>
          <div slot="card-header" class="card-header text-center card-header__placeholder">
            <p class="card--bg p-1 caption mb-4 m-0 text-white">COMING SOON</p>
            <img class="icon-showcase mb-2" :src="require('@/assets/icons/' + pageIcon + '.svg' )">
            <h2>{{pageName}}</h2>
          </div>
          <div slot="card-body" class="card-body">
            <div class="card-body__content">
              <p class="paragraph">{{pageName}} is coming to reach for business soon</p>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Card from "@/components/Card";
  export default {
    components: {
      Card,
    },
    props: ['pageName', 'pageIcon']
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .card--bg {
    background: $brand-gradient;
  }

  .card-body__content {
    border: 1px solid $smoke;
    padding: 1rem;
    text-align: center;
  }

  .icon-showcase {
    text-align: center;
    height: 4rem;
    width: 4rem;
  }

  .card-header__placeholder {
    margin: 0 auto;
  }

   .card-header {
    width: 12rem;
  }
</style>