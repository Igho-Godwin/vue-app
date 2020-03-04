<template>
  <div>
    <Card>
      <div slot="card-header">
            <h3>Recent Transactions</h3>
      </div>
      <div slot="card-body">
        <table class="table card-body__table">
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
            <tr v-for="staff in staffs" :key="staff.userId">
              <td><p>{{staff.userId}}</p></td>
              <td><p>{{staff.loanAmount}}</p></td>
              <td><p>{{staff.date}}</p></td>
              <td><p>{{staff.status}}</p></td>
              <td><p>{{staff.cashier}}</p></td>
              <td><p>
                <a href="#">View more</a>
              </p></td>
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
        staffs: [{
            userId: 'bahd9',
            loanAmount: '#100,000',
            date: '12 Mar. 2020',
            status: 'CONFIRMED',
            cashier: 'Grace',
          },
      ]
     }
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