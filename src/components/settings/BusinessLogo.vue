<template>
  <div>
    <Card>
      <div slot="card-header">
        <h3>Business Logo</h3>
      </div>
      <div slot="card-body">
        <p>We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form>
          <div class="form-row align-items-center justify-content-start">
            <div class="col-md-6 form-group mb-3">
              <label for="businessLogo" class="logo-showcase">
                <i class="fas fa-camera"></i></label>
            </div>
            <div class="col-md-6 form-group mb-3">
              <div class="custom-file image__upload">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label text-start" for="validatedCustomFile">Choose file...</label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
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
    },
  }
</script>

<style lang="scss">
  @import "@/scss/abstracts/_variables.scss";

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