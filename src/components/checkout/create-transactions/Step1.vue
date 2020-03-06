<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header text-white card--bg pb-3 pt-4">
        <p class="caption text-white mb-2">STEP 1 OF 3</p>
        <h3>Verify Identity of Customer</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form @submit="submit($event)">
          <div class="form-row mb-5">
            <label for="reachID" class="caption">ENTER REACH ID</label>
            <input type="text" v-model="reachId" class="form-control" id="" required>
          </div>
          <div class="card__text-end">
            <button type="submit" class="btn btn-green">Verify Customer</button>
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
              reachId:''
        }
    },
    
    computed: {
        
      },
    methods:{
        submit(event){
            event.preventDefault();  
            var payload = {reachId:this.reachId};

            fetch('http://localhost:93/v1/reachBusiness/verifyCustomerIdentity', {
              
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
       this.$store.dispatch('ADD_USER',data.data);
       console.log(this.$store.getters.user.user);
       window.open('/checkout/create-trans/2','_self');
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
        }
  }
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
  .card--bg {
    background: $brand-gradient;
  }
  .card__text-end {
    text-align: end;
  }
</style>