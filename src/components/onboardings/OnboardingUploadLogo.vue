<template>
  <div>
    <p class="onboarding__step">STEP 3 OF 3</p>
    <h1 class="onboarding__topic">Upload Business Logo</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="onboarding__card">
          <p class="onboarding__card--text">We recommend you use a square logo with dimensions 128px by 128px for best
            results.</p>
          <div class="card--image__icon bg-dark-smoke"><i class="fas fa-camera"></i></div>
          <div class="custom-file image__upload">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
            <label class="custom-file-label text-start" for="validatedCustomFile">Choose file...</label>
          </div>
          <button type="submit" class="btn btn-blue btn-block">Save &amp; Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import "@/scss/vendors/themed-bootstrap.scss";
  @import "@/scss/main.scss";

  .text-center {
    text-align: center;
  }

  .text-start {
    text-align: start;
    font-weight: $semi-bold;
  }

  .image__upload {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  .onboarding__step {
    margin-bottom: 1rem;
    padding-top: 2rem;

    @include breakpoint-min(lg) {
      margin-bottom: 1.25rem;
      padding-top: 3rem;
    }
  }

  .onboarding__card {
    max-width: 20.5rem;
    width: 100%;
    background: $white;
    position: absolute;
    top: 9rem;
    padding: 2rem 1rem;
    color: $main-text;
    border-radius: 0.25rem;
    @include breakpoint-min(lg) {
      top: 11.25rem;
      max-width: 22.5rem;
    }
  }
  .card--image__icon {
    max-width: 8rem;
    padding: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .card__gif {
    max-width: 18.5rem;
    width: 100%;

    @include breakpoint-min (lg) {
      max-width: 19.5rem;
    }
  }

  .onboarding__card--text {
    margin-bottom: 3rem;
  }
</style>