<template>
  <div id="createTransaction3">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-6 col-lg-8">
        <CreateTransaction3 />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import CreateTransaction3 from "@/components/checkout/create-transactions/Step3";
  export default {
    name: "Create-Transaction-Step-3",
    components: {
      CreateTransaction3
    }
  }
</script>