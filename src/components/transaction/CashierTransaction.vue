<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header pt-4 justify-content-between d-flex">
        <div>
          <h3 class="text-black">&#8358;10,000</h3>
          <p class="caption text-grey mb-2">LOAN AMOUNT</p>
        </div>
        <Status bgColor="status__pending" status="PENDING" textColor="text-yellow" />
      </div>
      <div slot="card-body" class="card-body">
        <div class="align-items-center justify-content-start d-flex mb-3 bg-rectangle p-3">
          <div class="mr-4">
            <img src="https://source.unsplash.com/256x256/?profile,picture" class="img-showcase"
              alt="customer's picture">
          </div>
          <div>
            <h3>Boyewa Babalola: 123AB</h3>
            <paragraph>This user is yet to confirm and accept terms of loan.</paragraph>
          </div>
        </div>
        <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">REACH ID</p>
          <p class="paragraph">123DA</p>
        </div>
        <div class="card-body__content justify-content-between">
          <p class="paragraph">Date of Transaction</p>
          <p class="paragraph">&#8358;2&nbsp;March,&nbsp;2020</p>
        </div>
        <div slot="card-header" class="card-header pl-0 pt-4 justify-content-between d-flex">
          <div>
            <h3 class="text-black">Item Purchased</h3>
            <p class="caption text-grey mb-2">LG WM750PB 7.5kg Top Loader Washing Machine - White</p>
          </div>
        </div>
      </div>

    </Card>

  </div>
</template>
<script>
  import Card from "@/components/Card";
  import Status from "@/components/Status";
  export default {
    components: {
      Card,
      Status
    },
    data() {}
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .card-body__content {
    border: 1px solid $smoke;
    padding: 1rem;
    display: flex;
  }

  .img-showcase {
    height: 4rem;
    width: 4rem;
  }

  .bg-rectangle {
    background-color: rgba(255, 159, 0, 0.12);
  }

  .status__pending {
    background-color: rgba(255, 159, 0, 0.12);
  }
</style>