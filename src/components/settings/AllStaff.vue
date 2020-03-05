<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <div class="justify-content-between align-items-center d-flex">
            <h3>All Staff</h3>
            <button type="submit" class="btn btn-blue btn-sm">Add New Staff</button>
        </div>
      </div>
      <div slot="card-body" class="card-body">
        <table class="table card-body__table">
          <thead class="bg-snow">
            <tr>
              <th scope="col" class="caption">NAME</th>
              <th scope="col" class="caption">LOCATION</th>
              <th scope="col" class="caption">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in staffs" :key="staff.name">
              <td><p>{{staff.name}}</p></td>
              <td><p>{{staff.location}}</p></td>
              <td><p>
                <a href="#">Edit&nbsp;</a>
                <a href="#" class="text-red">&nbsp;Delete</a>
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
            name: 'Mary',
            location: 'Ikoyi',
          },
          {
            name: 'Jide',
            location: 'Abuja',
          }
      ]
     }
  },
  props: [
      'name', 'location', 'address'
    ]
  }
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
  .card-body__table {
    border: solid 1px $smoke;
  }
</style>