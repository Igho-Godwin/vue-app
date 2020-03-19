<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Account Settings</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="firstName" class="caption">FIRST NAME</label>
            <input type="text" v-model="firstName" class="form-control" id="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName" class="caption">LAST NAME</label>
            <input type="text" v-model="lastName" class="form-control" id="lastName" required>
          </div>
          <div class="form-group mb-5">
            <label for="workEmail" class="caption">WORK EMAIL</label>
            <input type="email" v-model="workEmail" class="form-control" id="workEmail" required>
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
              firstName:this.$store.getters.user.contact_first_name,
              lastName:this.$store.getters.user.contact_last_name,
              workEmail:this.$store.getters.user.contact_email,
              successMessage:'Save Successful'
        }
    },
    methods: {
      submit() {
      let access_token = this.$store.getters.user.access_token;
      let payload = {first_name:this.firstName,last_name:this.lastName,work_email_address:this.workEmail,business_id:this.$store.getters.user.id};
      fetch(this.getGlobalUrl + "checkout/accountSettingsTabUpdate?access_token="+access_token, {
        method: "put", // or 'PUT'
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
              data.data.access_token = access_token;
              this.$store.dispatch("ADD_USER", data.data);
              this.$swal(this.successMessage);
            } else {
              this.$swal(data.message);
            }
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });
      },
      
    },
    mounted(){
    
    }
  }
</script>
