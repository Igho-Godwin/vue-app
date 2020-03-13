<template>
  <div id="dashboard">
    <div class="container-fluid py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center mb-5">
          <h1>Hi {{userName}} - Welcome to REACH for Business</h1>
          <p class="secondary-text">
            What do you want to do today?
          </p>
        </div>
        <div class="col-12 d-md-flex">
          <div class="col-md-4">
            <Card>
              <div slot="card-body" class="card-body">
                <div class="oval text-center"><img class="link-icon" src="@/assets/icons/transaction.svg"></div>
                <h3 class="text-center">Add New Transaction</h3>
                <p class="text-center card-text">Enter and approve new checkout transactions.</p>
                <router-link to="/checkout/create-trans/1" class="btn btn-blue btn-block mt-5">New Transaction</router-link>
              </div>
            </Card>
          </div>
          <div class="col-md-4">
            <Card>
              <div slot="card-body" class="card-body">
                <div class="oval text-center"><img class="link-icon" src="@/assets/icons/transaction.svg"></div>
                <h3 class="text-center">All Transactions</h3>
                <p class="text-center card-text">View all transactions </p>
                <router-link to="/transaction" class="btn btn-blue btn-block mt-5">View Transactions</router-link>
              </div>
            </Card>
          </div>
          <div class="col-md-4">
            <Card>
              <div slot="card-body" class="card-body">
                <div class="oval text-center"><img class="link-icon" src="@/assets/icons/cog.svg"></div>
                <h3 class="text-center">Settings</h3>
                <p class="text-center card-text">Setup or edit your bank information, organisation, staff and location.
                </p>
                <router-link to="/settings/checkout" class="btn btn-blue btn-block mt-5">View Settings</router-link>
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
      Card
    }

  }
</script>

<style lang="scss" scoped>
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
</style>