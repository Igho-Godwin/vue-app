<template>
  <Authentication title="Create your Account" authBG="bg-signup.jpg">
    <p slot="explainer">Already have an account? <router-link to="/sign-in">Sign In</router-link></p>
    <form @submit="submit($event)">
      <div class="form-group">
        <label for="businessName" class="caption">Business Name</label>
        <input type="text" class="form-control" v-model="business_name" id="businessName" required>
      </div>
      <div class="form-group">
        <label for="workEmail" class="caption">Your Work Email Address</label>
        <input type="text" class="form-control" v-model="work_email_address" id="workEmail" required>
      </div>
      <div class="form-group">
        <label for="businessType" class="caption">Business type</label>
        <select v-model='business_type' class="form-control text-regular" id="businessType"  >
            <option value='0' selected>Choose...</option>
            <option :value='category.id'  v-for="category in allBusinessCategories" :key="category.id">{{category.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password" class="caption">Create Password</label>
        <input type="password" class="form-control" id="password" v-model='password' required>
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
    },
    data(){
        return {
              business_name: '',
              business_type:'0',
              work_email_address:'',
              password:'',
              allBusinessCategories:[]
        }
    },
  methods: {
    submit(event) {

      event.preventDefault();

      var payload = {business_name:this.business_name, business_type:this.business_type , work_email_address:this.work_email_address , password:this.password  };

      fetch(
        this.getGlobalUrl+"checkout/signUp",
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
              this.$swal('Sign Up SuccessFul');
              window.open("/sign-in", "_self");
            } else {
              this.$swal(data.message);
            }
          }
          console.log("Success:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
    },
    getAllCategories(){

      fetch(
        this.getGlobalUrl+"checkout/getAllBusinessCategories",
        {
          method: "get", // or 'PUT'
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.status == "success") {
               this.allBusinessCategories = data.data;
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
    this.getAllCategories();
},


  }
</script>