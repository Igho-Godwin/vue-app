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
                <p>{{processDate(transaction.created_at)}}</p>
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
      Card
    },
    data() {
      return {
        transactions: []
      }
    },
    methods: {
      processDate(transaction_date) {
        //let date = transaction_date.split('-');
        //date = new Date(date[0], date[1], date[2].split(' ')[0]);
        return ((new Date(transaction_date)));
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