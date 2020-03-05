<template>
  <div id="createTransaction2">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-6 col-lg-8">
        <CreateTransaction2 />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import CreateTransaction2 from "@/components/checkout/create-transactions/Step2";
  export default {
    name: "Create-Transaction-Step-2",
    components: {
      CreateTransaction2
    }
  }
</script>