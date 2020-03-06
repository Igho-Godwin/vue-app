<template>
  <div class="new-transaction">
    <div class="new-transaction__content">
      <h2>Add New Transactions</h2>
      <p class="m-0">Enter and approve new checkout transactions.</p>
    </div>
    <div class="new-transction__cta">
      <router-link to="/checkout/create-trans/1" class="btn btn-snow">New Transaction</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .new-transaction {
    background: $brand-gradient;
    padding: 1rem;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
  }

  @include breakpoint-min(lg) {
    .new-transaction {
      padding: 1.5rem;
    }
  }
</style>

<script>
export default {
    components: {
      
    },
    data(){
        return {
              transactions:''

        }
    },
   
    methods:{
       
    } ,    
    mounted(){
        fetch('http://localhost:93/v1/reachBusiness/getAllTransactions', {
              
  method: 'get', // or 'PUT'
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then((response) => response.json())
.then((data) => {
  this.transactions = data;
  console.log('Success:', data);
})
.catch((error) => {
  console.log('Error:', error);
});
    }
   
  }
</script>