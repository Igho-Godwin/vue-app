<template>
  <section class="sign-up">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 sign-in__form">
          <div class="text-start mb-5">
            <h2>Create your Account</h2>
            <p>Already have an account? <router-link to="/">Sign In</router-link>
            </p>
          </div>
          <form>
            <div class="form-group text-small text-start">
               <label for="businessName">BUSINESS NAME</label>
            <input type="text" class="form-control text-regular" id="businessName" required>
            </div>
            <div class="form-group text-small text-start">
               <label for="emailAddress">YOUR WORK EMAIL ADDRESS</label>
              <input type="email" class="form-control text-regular" id="emailAddress" aria-describedby="emailAddress"
                 required>
            </div>
            <div class="form-group text-small text-start">
               <label for="businessType">BUSINESS TYPE</label>
              <select class="form-control text-regular" id="businessType" required>
                <option selected>Choose...</option>
                <option>Faith &amp; Charity</option>
                <option>Transportation</option>
                <option>Restaurants</option>
                <option>Entertainment</option>
                <option>Grocery</option>
              </select>
            </div>
            <div class="form-group text-small text-start mb-4">
               <label for="password">PASSWORD</label>
              <input type="password" class="form-control text-regular" id="password"
                required>
            </div>
            <button type="submit" class="btn btn-blue btn-block">Create My Account</button>
          </form>
        </div>
      </div>
    </div>
  </section>
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

  .sign-up {
    @include breakpoint-min (lg) {
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background: yellow;
      }
    }
  }

  .sign-in__form {

    @include breakpoint-min (lg) {
      margin-left: 35%;
      padding: 3rem;
    }
  }
</style>