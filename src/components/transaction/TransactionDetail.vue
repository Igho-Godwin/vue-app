<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header pt-4 justify-content-between d-flex">
        <div>
          <h3 class="text-black">&#8358;10,000</h3>
          <p class="caption text-grey mb-2">LOAN AMOUNT</p>
        </div>
        <div>
          <caption class="text-green">CONFIRMED</caption>
        </div>
      </div>
      <div slot="card-body" class="card-body">
         <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">REACH ID</p>
          <p class="paragraph">123DA</p>
        </div>
        <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">Date of Transaction</p>
          <p class="paragraph">&#8358;2&nbsp;March,&nbsp;2020</p>
        </div>
        <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">Total Amount Due</p>
          <p class="paragraph">&#8358;12,500</p>
        </div>
        <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">Total Amount Paid</p>
          <p class="paragraph">&#8358;0</p>
        </div>
        <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">Total Outstanding Payment</p>
          <p class="paragraph">&#8358;12,500</p>
        </div>
        <div class="card-body__content justify-content-between">
          <p class="paragraph">Due Date</p>
          <p class="paragraph">1&nbsp;April,&nbsp;2020</p>
        </div>
        <div slot="card-header" class="card-header pt-4 justify-content-between d-flex">
        <div>
          <h3 class="text-black">Item Purchased</h3>
          <p class="caption text-grey mb-2">LG WM750PB 7.5kg Top Loader Washing Machine - White</p>
        </div>
      </div>
      <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">Cashier</p>
          <p class="paragraph">Mary Ikenne</p>
        </div>
        <div class="card-body__content justify-content-between">
          <p class="paragraph">Store Location</p>
          <p class="paragraph">Ikoyi-Awolowo</p>
        </div>
      </div>
      
    </Card>

  </div>
</template>
<script>
  import Card from "@/components/Card";
  export default {
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .card-body__content {
    border: 1px solid $smoke;
    padding: 1rem;
    display: flex;
  }

</style>