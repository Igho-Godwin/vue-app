<template>
  <div>
    <p class="onboarding__step">STEP 2 OF 3</p>
    <h1 class="onboarding__topic">Add Company's Information</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="onboarding__card">
            <form>
              <div class="form-group text-small text-start">
                <label for="businessName">CAC BUSINESS NAME</label>
                <input type="text" class="form-control text-regular" id="businessName" required>
              </div>
              <div class="form-group text-small text-start mb-4">
                <label for="PhoneNumber">PHONE</label>
                <input type="number" class="form-control text-regular" id="phoneNumber" required>
              </div>
              <div class="form-group text-small text-start">
                <label for="emailAddress">WEBSITE</label>
                <input type="email" class="form-control text-regular" id="emailAddress" aria-describedby="emailAddress"
                  required>
              </div>
              <button type="submit" class="btn btn-blue btn-block">Save &amp; Continue</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

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

    @include breakpoint-min(lg) {
      top: 11.25rem;
      max-width: 22.5rem;
      padding: 2rem 1.5rem;
    }
  }
</style>