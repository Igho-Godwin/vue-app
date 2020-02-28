<template>
  <section class="sign-in">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 sign-in__form">
          <div class="text-start mb-5">
            <h2>Sign In</h2>
            <p>New to REACH for Business? <router-link to="/sign-up">Sign Up</router-link></p>
          </div>
          <form>
            <div class="form-group">
              <input type="email" class="form-control text-regular" id="emailAddress" aria-describedby="emailAddress"
                placeholder="Email Address" required>
            </div>
            <div class="form-group">
              <input type="password" class="form-control text-regular" id="exampleInputPassword1" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-blue btn-block">Login to your Account</button>
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
  }

  .sign-in {
      @include breakpoint-min (lg) {
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background: blue;
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