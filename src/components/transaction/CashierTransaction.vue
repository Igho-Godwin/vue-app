<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header pt-4 justify-content-between d-flex">
        <div>
          <h3 class="text-black">&#8358;{{amount}}</h3>
          <p class="caption text-grey mb-2">LOAN AMOUNT</p>
        </div>
        <div class="text-bounds">
          <caption class="caption text-yellow p-0 " id='status'>{{loanStatus}}</caption>
        </div>
      </div>
      <div slot="card-body" class="card-body">
        <div class="align-items-center justify-content-start d-flex mb-3 bg-rectangle p-3">
          <div class="mr-4">
            <img v-bind:src="profile_image_url"  class="img-showcase" alt="customer's picture">
          </div>
          <div>
            <h3>{{fullName}}: 123AB</h3>
            <paragraph>This user is yet to confirm and accept terms of loan.</paragraph>
          </div>
        </div>
         <div class="card-body__content justify-content-between border-bottom-0">
          <p class="paragraph">REACH ID</p>
          <p class="paragraph">{{reachId}}</p>
        </div>
        <div class="card-body__content justify-content-between">
          <p class="paragraph">Date of Transaction</p>
          <p class="paragraph">{{transaction_date}}</p>
        </div>
        <div slot="card-header" class="card-header pl-0 pt-4 justify-content-between d-flex">
        <div>
          <h3 class="text-black">Item Purchased</h3>
          <p class="caption text-grey mb-2">{{item_description}}</p>
        </div>
        <div>
          <br>
          
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
              user:'',
              transaction_date:'',
              loanStatus: 'PENDING',
              checkStatus:1,
              loan:'',
              days: [
                       'Sun',
                       'Mon',
                       'Tue',
                       'Wed',
                       'Thu',
                       'Fri',
                       'Sat'
              ],
              months:[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ]           
              
        }
    },
 
   methods:{

     formatDate(date){
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = this.days[date.getDay()]+' '+date.getDate()+' '+this.months[date.getMonth()]+' '+date.getFullYear()+' '+hours + ':' + minutes + ' ' + ampm;
        return strTime;
      },
     
     refresh(){
       if(this.checkStatus == 1){
      fetch('https://staging.mybank.ng/v1/reachBusiness/checkTransaction', {
              
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
       if(data.data.status == 'active'){
            this.loanStatus = 'CONFIRMED';
            this.checkStatus = 2;
            let element = document.getElementById("status");
            this.$store.dispatch('ADD_LOAN_DATA',data.data);
            element.classList.add("text-green");
            element.classList.remove("text-yellow");
            this.$store.dispatch('CLEAR_STORE');
            window.open('/checkout','_self');
            
       }
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
   },
    mounted(){
       let user = this.$store.getters.user;
       console.log(this.$store.getters.loan);
       let loan = this.$store.getters.loan;
       this.loan = loan;
       //var store = this.store;
       this.fullName = user.first_name+' '+user.last_name;
       this.profile_image_url = user.profile_image_url;
       this.reachId = user.referral_code;
       this.user = user;
       if(loan.status == 'active'){
         this.loanStatus = 'confirmed';
         let element = document.getElementById("status");
         element.classList.add("text-green");
         element.classList.remove("text-yellow");
       }
       this.amount = new Intl.NumberFormat().format(loan.amount);
       //let date = loan.created_at.split('-');
       //date = new Date(date[0],date[1],date[2].split(' ')[0]);
       this.transaction_date = this.formatDate(new Date(loan.created_at));
       //console.log(date[0],date[1],date[2].split(' ')[0],loan.created_at);
       this.item_description = loan.item_description;
       
       //this.$store.dispatch('CLEAR_STORE'); 
       setInterval(function(){ 
         console.log(loan);
      fetch('https://staging.mybank.ng/v1/reachBusiness/checkTransaction', {
              
  method: 'post', // or 'PUT'
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(loan),
})
.then((response) => response.json())
.then((data) => {
  if(data){
     if(data.status == 'success'){
       if(data.data.status == 'active'){
            this.loanStatus = 'CONFIRMED';
            this.checkStatus = 2;
            let element = document.getElementById("status");
            //store.dispatch('ADD_LOAN_DATA',data.data);
            element.classList.add("text-green");
            element.classList.remove("text-yellow");
            //this.$store.dispatch('CLEAR_STORE');
            window.open('/checkout','_self');
            
       }
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
     
    , 10000);
          
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .card-body__content {
    border: 1px solid $smoke;
    padding: 1rem;
    display: flex;
  }

  .img-showcase {
    height: 4rem;
    width: 4rem;
  }

 .bg-rectangle {
   background-color: rgba(255, 159, 0, 0.12);
 }

 .text-bounds {
    width: 4.875rem;
    height: 1.5rem;
    background-color: rgba(255, 159, 0, 0.12);
    border-radius: 4px;
    padding: 2px 8px;
  }
</style>