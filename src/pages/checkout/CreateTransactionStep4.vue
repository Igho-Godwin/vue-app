<template>
  <div id="createTransaction3">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-6 col-lg-8">
        <CreateTransaction4 />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import CreateTransaction4 from "@/components/transaction/CashierTransaction";
  export default {
    name: "Create-Transaction-Step-4",
    components: {
      CreateTransaction4
    }
  }
</script>