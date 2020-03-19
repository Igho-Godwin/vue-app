<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Company Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="businessName" class="caption">BUSINESS NAME</label>
            <input type="text" v-model="businessName" class="form-control" id="" required>
          </div>
          <div class="form-group">
            <label for="phoneNumber" class="caption">PHONE</label>
            <input type="number" v-model="phoneNumber" class="form-control" id="" required>
          </div>
          <div class="form-group">
            <label for="website" class="caption">WEBSITE</label>
            <input type="text" v-model="websiteUrl" class="form-control" id="" required>
          </div>
          <div class="form-group mb-5">
            <label for="businessType" class="caption">BUSINESS TYPE</label>
            <select v-model="businessType"  class="form-control text-regular" id="businessType"  >
                <option value='0' selected>Choose...</option>
                <option :value='category.id'  v-for="category in businessTypes" :key="category.id">{{category.name}}</option>
            </select>
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
              businessName:this.$store.getters.user.name,
              phoneNumber:this.$store.getters.user.contact_phone,
              websiteUrl:this.$store.getters.user.business_url,
              businessType:this.$store.getters.user.category_id,
              businessTypes:this.$store.getters.businessCategories,
              businessLogo:this.$store.getters.user.logo_url
        }
    },
    methods:{
      submit(){ 
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
              data.data.access_token = data.access_token;
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
    },
      
    }
  }
</script>