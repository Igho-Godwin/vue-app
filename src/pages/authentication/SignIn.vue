<template>
  <Authentication title="Sign In" authBG="bg-signin.jpg">
    <p slot="explainer">
      New to REACH for Business?
      <router-link to="sign-up">Sign Up</router-link>
    </p>
    <form @submit="submit($event)">
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="emailAddress"
          aria-describedby="emailAddress"
          placeholder="Email Address"
          v-model="work_email_address"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control text-regular"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
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
  },
  data(){
        return {
              work_email_address:'',
              password:''
        }
    },
  methods: {
    submit(event) {
      event.preventDefault();
      var payload = { work_email_address:this.work_email_address, password:this.password  };

      fetch(
        this.getGlobalUrl+"checkout/login",
        {
          method: "post", // or 'PUT'
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      )
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.status == "success") {
              this.$store.dispatch("ADD_USER", data.data);
              if(this.$store.getters.user.cac_business_name != null){
                window.open("/dashboard", "_self");
              }
              else{
                window.open("/onboarding/1", "_self");
              }   
            } else {
              this.$swal(data.message);
            }
          }
          console.log("Success:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }
  },
  mounted(){
       // console.log(this.getGlobalUrl);
  }
};
</script>