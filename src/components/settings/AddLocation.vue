<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Add a Store Location</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form id='add_store_location_form'>
          <div class="form-group">
            <label for="storeName" class="caption">Name of Store</label>
            <input type="text" v-model='storeName' class="form-control" id="storeName" required />
          </div>
          <div class="form-group mb-5">
            <label for="storeAddress" class="caption">Address of Store</label>
            <input type="text" v-model='storeAddress' class="form-control" id="storeAddress" required />
          </div>
          <button type="button" @click="submit()" class="btn btn-green">Save Changes</button>
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
              storeName:'',
              storeAddress:'',
        }
    },
  methods: {
    submit() {
      var payload = {
        business_id: this.$store.getters.user.id,
        store_name: this.storeName,
        store_address: this.storeAddress
      };

      let access_token = this.$store.getters.user.access_token;
      fetch(this.getGlobalUrl + "checkout/addStoreLocation?access_token="+access_token, {
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
              this.$store.dispatch("ADD_BUSINESS_STORE",payload);
              document.getElementById("add_store_location_form").reset();
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
  }
};
</script>
