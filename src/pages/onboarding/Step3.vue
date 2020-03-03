<template>
  <Onboarding progress="Step 3 of 3" title="Upload Business Logo">
    <Card>
      <div slot="card-body">
        <p class="text-grey text-center">We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form>
          <label for="businessLogo" class="logo-showcase">
            <i class="fas fa-camera"></i>
          </label>
          <div class="form-group">
            <input id="businessLogo" type="file" class="form-control" placeholder="Choose file">
          </div>
          <button type="submit" class="btn btn-blue btn-block mt-5">Save &amp; Continue</button>
        </form>
      </div>
    </Card>
  </Onboarding>
</template>

<script>
  import Onboarding from "@/components/Onboarding";
  import Card from "@/components/Card";

  export default {
    name: "Step-3",
    components: {
      Onboarding,
      Card
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  .logo-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    height: 8rem;
    width: 8rem;
    border: 1px dashed $smoke;
    background-color: $snow;
    font-size: 1.5rem;
    color: $secondary-text;
    cursor: pointer;
    &:hover {
      border-color: $dark-smoke;
    }
  }
</style>