<template>
  <div id="checkoutDashboard">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-9">
        <TransactionsAdmin />
      </div>
    </div>
    </div>
  </div>
</template>


<script>
  import TransactionsAdmin from "@/components/checkout/TransactionsAdmin";

  export default {
    name: "Checkout-Dashboard",
    components: {
      TransactionsAdmin
    }
  }
</script>