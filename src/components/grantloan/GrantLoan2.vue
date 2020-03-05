<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header text-white card--bg pb-3 pt-4">
        <p class="caption text-white mb-2">STEP 2 OF 3</p>
        <h3>Enter Purchase Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <div class="bg-dark-snow align-items-center justify-content-start d-flex mb-3">
          <div class="mr-4">
            <label for="businessLogo" class="logo-showcase bg-dark-smoke mb-0">
              <i class="fas fa-camera"></i></label>
          </div>
          <div>
            <h3>Boyewa Babalola</h3>
            <paragraph>REACH ID: 123AB</paragraph>
          </div>
        </div>
        <form>
          <div class="form-row mb-3">
            <label for="amount" class="caption">AMOUNT (&#8358;)</label>
            <input type="number" class="form-control" id="" required>
          </div>
          <div class="form-row mb-5">
            <label for="itemDescription" class="caption">ITEM DESCRIPTION</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row justify-content-between">
            <button type="submit" class="btn btn-snow">Go Back</button>
            <button type="submit" class="btn btn-green">Continue</button>
          </div>
        </form>
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

  .card--bg {
    background: $brand-gradient;
  }


  .logo-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: 8rem;
    border: 1px dashed $smoke;
    font-size: 1.5rem;
    color: $secondary-text;
    cursor: pointer;

    &:hover {
      border-color: $dark-smoke;
    }
  }
</style>