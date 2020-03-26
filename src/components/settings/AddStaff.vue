<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Add Staff</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form id='add_staff_form'> 
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="firstName" class="caption">First Name</label>
              <input type="text" v-model='firstName' class="form-control" id="firstName" required>
            </div>
            <div class="col-md-6 form-group">
              <label for="lastName" class="caption">Last Name</label>
              <input type="text" v-model='lastName' class="form-control" id="lastName" required>
            </div>
          </div>
          <div class="form-group">
            <label for="workEmail" class="caption">Work Email Address</label>
            <input type="email" v-model='email' class="form-control" id="workEmail" required>
          </div>
          <div class="form-group">
            <label for="assignLocation" class="caption">Assign to a Location</label>
            <input type="text" v-model='location' class="form-control" id="assignLocation" required>
          </div>
          <div class="form-group mb-5">
            <label for="createPassword" class="caption">Create Password</label>
            <input type="password" v-model='password' class="form-control" id="createPassword" required>
          </div>
          <button type="button" @click='submit()' class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>

  </div>
</template>
<script>
  import Card from "@/components/Card";
  export default {
    components: {
      Card
    },
    data(){
        return {
              firstName:'',
              lastName:'',
              email:'',
              location:'',
              password:''
        }
    },
  methods: {
    submit() {
      var payload = {
        business_id: this.$store.getters.user.id,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        location: this.location,
        password: this.password
      };

      let access_token = this.$store.getters.user.access_token;
      fetch(this.getGlobalUrl + "checkout/addBusinessStaff?access_token="+access_token, {
        method: "post", // or 'PUT'
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.status == "success") {
              this.$store.dispatch("ADD_BUSINESS_STAFF",payload);
              payload = {};
              document.getElementById("add_staff_form").reset();
              this.$swal('Save Successful'); 
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
  }
</script>
