<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header text-white card--bg pb-3 pt-4">
        <p class="caption text-white mb-2">STEP 3 OF 3</p>
        <h3>Confirm Loan Details</h3>
      </div>
      <div slot="card-body" class="card-body">
         <div class="card-body__content">
          <p class="caption">AMOUNT</p>
          <paragraph>&#8358;100,000</paragraph>
        </div>
        <div class="card-body__content">
          <p class="caption">ITEM DESCRIPTION</p>
          <paragraph>LG flat screen TV 42 Inches LGTV42WE2019</paragraph>
        </div>
        <div class="card-body__content">
        <p class="caption">USER DETAILS</p>
        <div class="align-items-center justify-content-start d-flex mb-3">
          <div class="mr-4">
            <label for="businessLogo" class="logo-showcase bg-dark-smoke">
              <i class="fas fa-camera"></i></label>
          </div>
          <div>
            <h3>Boyewa Babalola</h3>
            <paragraph>REACH ID: 123AB</paragraph>
          </div>
        </div>
          <div class="form-row justify-content-between">
            <button type="submit" class="btn btn-snow">Go Back</button>
            <button type="submit" class="btn btn-green">Continue</button>
          </div>
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

  .card--bg {
    background: $brand-gradient;
  }
  .card-body__content {
    border: 1px solid $smoke;
    padding: 1rem;
  }

  .logo-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border: 1px dashed $smoke;
    font-size: 1.5rem;
    color: $secondary-text;
    cursor: pointer;

    &:hover {
      border-color: $dark-smoke;
    }
  }
</style>