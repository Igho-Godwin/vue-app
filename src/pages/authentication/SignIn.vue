<template>
  <Authentication title="Sign In" authBG="bg-signin.jpg">
    <p slot="explainer">New to REACH for Business? <router-link to="sign-up">Sign Up</router-link></p>
    <form>
      <div class="form-group">
        <input type="email" class="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control text-regular" id="password" placeholder="Password" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn-blue btn btn-block">Login to your Account</button>
      </div>
    </form>
  </Authentication>
</template>

<script>
  import Authentication from "@/components/Authentication";
  export default {
    name: "Sign-In",
    components: {
      Authentication
    }
  }
</script>