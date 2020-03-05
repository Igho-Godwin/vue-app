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