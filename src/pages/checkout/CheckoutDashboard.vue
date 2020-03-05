<template>
  <div id="checkoutDashboard">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-6 col-lg-8">
        <NewTransaction />
      </div>
    </div>
    </div>
  </div>
</template>


<script>
  import NewTransaction from "@/components/checkout/NewTransaction";

  export default {
    name: "Checkout-Dashboard",
    components: {
      NewTransaction
    }
  }
</script>