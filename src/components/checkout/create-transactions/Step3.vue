<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header text-white card--bg pb-3 pt-4">
        <p class="caption text-white mb-2">STEP 3 OF 3</p>
        <h3>Confirm Loan Details</h3>
      </div>
      <div slot="card-body" class="card-body">
         <div class="card-body__content">
          <p class="caption">AMOUNT</p>
          <paragraph>&#8358;{{amount}}</paragraph>
        </div>
        <div class="card-body__content">
          <p class="caption">ITEM DESCRIPTION</p>
          <paragraph>{{item_description}}</paragraph>
        </div>
        <div class="card-body__content">
        <p class="caption">USER DETAILS</p>
        <div class="align-items-center justify-content-start d-flex mb-3">
          <div class="mr-4">
            <img v-bind:src="profile_image_url" class="img-showcase" alt="customer's picture">
          </div>
          <div>
            <h3>{{fullName}}</h3>
            <paragraph>REACH ID: {{reachId}}</paragraph>
          </div>
        </div>
          <div class="form-row justify-content-between">
            <a href='/checkout/create-trans/2'><button type="button" class="btn btn-snow">Go Back</button></a>
            <button type="submit" @click="submit($event)" class="btn btn-green">Continue</button>
          </div>
          </div>
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
              amount:'',
              item_description:'',
              user:''
        }
    },
    methods:{
        submit(event){
            event.preventDefault();  
            fetch('https://staging.mybank.ng/v1/reachBusiness/sendConfirmationNotificationToUser', {
              
  method: 'post', // or 'PUT'
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.$store.getters.loan),
})
.then((response) => response.json())
.then((data) => {
  if(data){
     if(data.status == 'success'){
       window.open('/checkout/create-trans/4','_self');
     }
  }
  console.log('Success:', data);
})
.catch((error) => {
  console.log('Error:', error);
   });     
      // window.open('/checkout/create-trans/4','_self');
        }   
    }
,    
    mounted(){
       let user = this.$store.getters.user;
       console.log(this.$store.getters.loan);
       let loan = this.$store.getters.loan;
       this.fullName = user.first_name+' '+user.last_name;
       this.profile_image_url = user.profile_image_url;
       this.reachId = user.referral_code;
       this.user = user;
       this.amount = new Intl.NumberFormat().format(loan.amount);
       this.item_description = loan.item_description
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .card--bg {
    background: $brand-gradient;
  }
  .card-body__content {
    border: 1px solid $smoke;
    padding: 1rem;
  }

  .img-showcase {
    display: flex;
    height: 5rem;
    max-width: 6rem;
    width: 100%;
  }
</style>