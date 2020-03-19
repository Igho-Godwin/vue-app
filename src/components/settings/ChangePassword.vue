<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Change Password</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="oldPassword" class="caption">OLD PASSWORD</label>
            <input type="password" v-model='old_password' class="form-control" id="oldPassword" required>
          </div>
          <div class="form-group">
            <label for="newPassword" class="caption">NEW PASSWORD</label>
            <input type="password" v-model='password' class="form-control" id="newPassword" required>
          </div>
          <div class="form-group mb-5">
            <label for="retypePassword" class="caption">RETYPE PASSWORD</label>
            <input type="password" v-model='repeat_password' class="form-control" id="retypePassword" required>
          </div>
          <button type="button" @click='submit()' class="btn btn-red">Save Changes</button>
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
              old_password:'',
              password:'',
              repeat_password:''
        }
    },
    methods: {
      submit() {
      let access_token = this.$store.getters.user.access_token;
      let payload = {business_id:this.$store.getters.user.id,old_password:this.old_password,password:this.password,repeat_password:this.repeat_password};
      fetch(this.getGlobalUrl + "checkout/changePassword?access_token="+access_token, {
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
              this.$swal(data.data.message);
            } else {
              this.$swal(data.message);
            }
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });
      },
      
    }
  }
</script>
