<template>
  <div id="checkoutDashboard">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-9">
        <NewTransaction />
        <TransactionsAdmin />
      </div>
    </div>
    </div>
  </div>
</template>


<script>
  import NewTransaction from "@/components/checkout/NewTransaction";
  import TransactionsAdmin from "@/components/checkout/TransactionsAdmin";

  export default {
    name: "Checkout-Dashboard",
    components: {
      NewTransaction,
      TransactionsAdmin
    }
  }
</script>