<template>
  <Onboarding progress="Step 3 of 3" title="Upload Business Logo">
    <Card>
      <div slot="card-body" class="card-body">
        <p class="text-grey text-center">We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form>
          <label for="businessLogo" class="logo-showcase">
            <img class="fas fa-camera preview text-center" :src="imageData">
          </label>
          <div class="form-group">
            <input id="businessLogo" type="file" class="form-control" placeholder="Choose file" @change="previewImage" accept="image/*">
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
    },
    data() {
      return {
        imageData: ""  
      }
    },
    methods: {
        previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  .logo-showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    max-width: 8rem;
    width: 100%;
    height: 8rem;
    border: 1px dashed $smoke;
    background-color: $snow;
    font-size: 1.5rem;
    color: $secondary-text;
    cursor: pointer;
    &:hover {
      border-color: $dark-smoke;
    }
  }
  img.preview {
    max-width: 8rem;
    width: 100%;
}
</style>