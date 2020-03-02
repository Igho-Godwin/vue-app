<template>
  <Authentication title="Create your Account" authBG="bg-signup.jpg">
    <p slot="explainer">Already have an account? <router-link to="/sign-in">Sign In</router-link></p>
    <form>
      <div class="form-group">
        <label for="businessName" class="caption">Business Name</label>
        <input type="text" class="form-control" id="businessName" required>
      </div>
      <div class="form-group">
        <label for="workEmail" class="caption">Your Work Email Address</label>
        <input type="text" class="form-control" id="workEmail" required>
      </div>
      <div class="form-group">
        <label for="businessType" class="caption">Business Name</label>
        <select class="form-control text-regular" id="businessType" required>
          <option selected>Choose...</option>
          <option>Faith &amp; Charity</option>
          <option>Transportation</option>
          <option>Restaurants</option>
          <option>Entertainment</option>
          <option>Grocery</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password" class="caption">Create Password</label>
        <input type="text" class="form-control" id="password" required>
      </div>
      
      <div class="form-group">
        <button type="submit" class="btn-blue btn btn-block">Create My Account</button>
      </div>
    </form>
  </Authentication>
  <!-- <section class="sign-up">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 sign-in__form">
          <div class="text-start mb-5">
            <h2>Create your Account</h2>
            <p>Already have an account? <router-link to="/sign-in">Sign In</router-link>
            </p>
          </div>
          <form>
            <div class="form-group text-small text-start">
               <label for="businessName" class="caption">BUSINESS NAME</label>
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
  </section> -->
</template>

<script>
  import Authentication from "@/components/Authentication";
  export default {
    name: "Sign-Up",
    components: {
      Authentication
    }
  }
</script>