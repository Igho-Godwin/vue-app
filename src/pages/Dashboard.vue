<template>
  <div id="dashboard">
    <div class="container-fluid py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center mb-5">
          <h1>Hi Mary - Welcome to REACH for Business</h1>
          <p class="secondary-text">
            What do you want to do today?
          </p>
        </div>
        <div class="col-12 d-md-flex">
          <div class="col-md-4" v-for="content in cardContent" :key="content.num">
            <Card>
              <div slot="card-body" class="card-body">
                <div class="oval text-center"><img class="link-icon"
                    :src="require('@/assets/icons/' + content.icon + '.svg' )"></div>
                <h3 class="text-center card-text">{{content.header}}</h3>
                <p class="text-center card-text">{{content.description}}</p>
                <router-link :to="content.url" class="btn btn-blue btn-block mt-5 btn-text-size">{{content.buttonText}}</router-link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Card from "@/components/Card";
  export default {
    name: "Dashboard",
    props: {
      userName: String,
    },
    components: {
      Card,
    },
    data() {
      return {
        cardContent: [{
            num: 1,
            icon: 'transaction',
            header: 'Add New Transaction',
            description: 'Enter and approve new checkout transactions.',
            buttonText: 'New Transaction',
            url: '/checkout/create-trans/1',
          },
          {
            num: 2,
            icon: 'transaction',
            header: 'All Transactions',
            description: 'View all transactions ',
            buttonText: 'View Transactions',
            url: '/transaction',
          },
          {
            num: 3,
            icon: 'cog',
            header: 'Settings',
            description: 'Setup or edit your bank information, organisation, staff and location.',
            buttonText: 'View Settings',
            url: '/settings/checkout',
          },
        ]
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";
  .card-text {
      height: 2.5rem;
  }


  .oval {
    width: 5rem;
    height: 5rem;
    background: rgba($color: #CF3E4C, $alpha: 0.1);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.375rem;
  }

  .link-icon {
    height: 1.5rem;
    width: 1.75rem;
  }

  .btn-text-size {
    height: 4.625rem;
  }
</style>