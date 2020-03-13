<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Recent Transactions</h3>
      </div>
      <div slot="card-body" class="card-body">
        <table class="table card-body__table table-responsive">
          <thead class="bg-snow">
            <tr>
              <th scope="col" class="caption">REACH USER ID</th>
              <th scope="col" class="caption">LOAN AMOUNT</th>
              <th scope="col" class="caption">DATE</th>
              <th scope="col" class="caption">STATUS</th>
              <th scope="col" class="caption">CASHIER</th>
              <th scope="col" class="caption">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td>
                <p>{{transaction.reach_id}}</p>
              </td>
              <td>
                <p>{{transaction.amount}}</p>
              </td>
              <td>
                <p>{{processDate(transaction.start_date)}}</p>
              </td>
              <td>
                <p>{{transaction.status}}</p>
              </td>
              <td>
                <p>Ronke</p>
              </td>
              <td>
                <p>
                  <a href="#">View more</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
   

  </div>
</template>
<script>
  import Card from "@/components/Card";
  
  export default {
    components: {
      Card,
 
    },
    data() {
      return {
        transactions: [],
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
    methods: {
      formatDate(date){
        var hours = date.getHours()+1;
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = this.days[date.getDay()]+' '+date.getDate()+' '+this.months[date.getMonth()]+' '+date.getFullYear()+' '+hours + ':' + minutes + ' ' + ampm;
        return strTime;
      },
      processDate(transaction_date) {
        //let date = transaction_date.split('-');
        //date = new Date(date[0], date[1], date[2].split(' ')[0]);
        return this.formatDate(new Date(transaction_date));
      }
    },
    mounted() {
      fetch('https://staging.mybank.ng/v1/reachBusiness/getAllTransactions', {

          method: 'get', // or 'PUT'
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          this.transactions = data.data;
          console.log('Success:', data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });


    },
    props: [
      'userId', 'loanAmount', 'date', 'status', 'cashier'
    ]
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .card-body__table {
    border: solid 1px $smoke;
  }
</style>