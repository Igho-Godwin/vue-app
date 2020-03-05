<template>
  <div id="createTransaction1">
    <div class="container-fluid py-3">
      <div class="row">
      <div class="col-xl-6 col-lg-8">
        <CreateTransaction1 />
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import CreateTransaction1 from "@/components/checkout/create-transactions/Step1";
  export default {
    name: "Create-Transaction-Step-1",
    components: {
      CreateTransaction1
    }
  }
</script>