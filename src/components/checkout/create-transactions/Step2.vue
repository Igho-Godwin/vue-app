<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header text-white card--bg pb-3 pt-4">
        <p class="caption text-white mb-2">STEP 2 OF 3</p>
        <h3>Enter Purchase Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <div class="bg-dark-snow align-items-center justify-content-start d-flex mb-3">
          <div class="mr-4">
            <img v-bind:src="profile_image_url"  class="img-showcase" alt="customer's picture">
          </div>
          <div>
            <h3>{{fullName}}</h3>
            <paragraph>REACH ID: {{reachId}}</paragraph>
          </div>
        </div>
        <form  @submit="submit($event)">
          <div class="form-row mb-3">
            <label for="amount" class="caption">AMOUNT (&#8358;)</label>
            <input type="number" v-model='amount' class="form-control" id="number" required>
          </div>
          <div class="form-row mb-5">
            <label for="itemDescription"  class="caption">ITEM DESCRIPTION</label>
            <input type="text" v-model='item_description' class="form-control" id="itemDescription" required>
          </div>
          <div class="form-row justify-content-between">
            <a href='/checkout/create-trans/1'><button type="button" class="btn btn-snow">Go Back</button></a>
            <button type="submit" class="btn btn-green">Continue</button>
          </div>
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
              fullName:'',
              profile_image_url:'',
              reachId:'',
              item_description:'',
              amount: '',
              user:''

        }
    },
   
    methods:{
        submit(event){
            event.preventDefault();  
            var payload = {amount:this.amount,reachId:this.reachId,item_description:this.item_description,account:"456677",user:this.user};

            fetch('http://localhost:93/v1/reachBusiness/grantLoan', {
              
  method: 'post', // or 'PUT'
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})
.then((response) => response.json())
.then((data) => {
  if(data){
     if(data.status == 'success'){
       this.$store.dispatch('ADD_LOAN_DATA',data.data);
       console.log(this.$store);
       console.log(data.data);
       window.open('/checkout/create-trans/3','_self');
     }
     else{
       this.$swal(data.message);
     }  
  }
  console.log('Success:', data);
})
.catch((error) => {
  console.log('Error:', error);
});
          
        }
    } ,    
    mounted(){
       if(this.$store.getters.loan != ''){
          this.amount = this.$store.getters.loan.amount;
          this.item_description = this.$store.getters.loan.item_description;
       }
       let user = this.$store.getters.user;
       this.fullName = user.first_name+' '+user.last_name;
       this.profile_image_url = user.profile_image_url;
       this.reachId = user.referral_code;
       this.user = user;
    }
   
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .card--bg {
    background: $brand-gradient;
  }


  .img-showcase {
    display: flex;
    height: 8rem;
    width: 8rem;
  }
</style>