<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Bank Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="row">
            <div class="col-md-6 form-group">
               <label for="bankName" class="caption">Bank Name</label>
               <select v-model="bankName"  class="form-control text-regular" id="bankName"  >
                <option value='0' selected>Choose...</option>
                <option :value='bank.code'  v-for="bank in banks" :key="bank.id">{{bank.name}}</option>
              </select>  
            </div>
            <div class="col-md-6 form-group">
              <label for="accountNumber" class="caption">ACCOUNT NUMBER</label>
              <input type="text" v-model="accountNumber" class="form-control" id="accountNumber" required>
            </div>
          </div>
          <div class="form-group mb-5">
            <label for="accountName" class="caption">ACCOUNT NAME</label>
            <input type="text"  v-model="accountName" class="form-control" id="accountName" required>
          </div>
          <button type="button"  @click="submit()" class="btn btn-green">Save Changes</button>
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
              bankName:this.$store.getters.user.bank_name,
              accountNumber:this.$store.getters.user.account_number,
              accountName:this.$store.getters.user.account_name,
              banks:[],
              successMessage:'Save Successful'
             
        }
    },
    methods: {
      submit() {
      let access_token = this.$store.getters.user.access_token;
      let payload = {business_id:this.$store.getters.user.id,bank_name:this.bankName,account_number:this.accountNumber,account_name:this.accountName};
      fetch(this.getGlobalUrl + "checkout/checkOutSetup?access_token="+access_token, {
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
          //console.log("Success:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
      },
      getAllBanks(){
       
          if(this.$store.getters.banks.length == 0){
      let access_token = this.$store.getters.user.access_token;
      fetch(
        this.getGlobalUrl+"banks/getByCountryId?country_id=1&access_token="+access_token,
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
               this.$store.dispatch("ADD_BANK_DATA", data.data);
            } else {
               //this.$swal(data.message);
            }
          }
          console.log("Success:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
      }
      else{
         console.log(this.banks);
         this.banks = this.$store.getters.banks;
         if(this.bankName == null){
             this.bankName = 0; 
          }
      }
          
      }
    },
    mounted(){
      
      this.getAllBanks();
    }
     
  }
</script>
