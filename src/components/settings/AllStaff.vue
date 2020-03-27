<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <div class="justify-content-between align-items-center d-flex">
            <h3>All Staff</h3>
            <router-link to="/settings/add-staff" class="btn btn-blue btn-sm">Add New Staff</router-link>
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
            <tr v-for="person in staff" :key="person.id">
              <td><p>{{person.first_name}}</p></td>
              <td><p>{{person.location}}</p></td>
              <td><p>
                <a href="#" @click='editStaff(person)'>Edit&nbsp;</a>
                <a href="#" class="text-red" @click='deleteStaff(person.id)' >&nbsp;Delete</a>
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
        staff: []
     }
  },
  methods:{
    deleteStaff(staffId){
        fetch(
        this.getGlobalUrl+"checkout/staff/"+staffId+'?access_token='+this.$store.getters.user.access_token,
        {
          method: "delete", // or 'PUT'
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.status == "success") {
               this.$swal(data.data);
               location.reload();
            }
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });

    },
    editStaff(){
       //this.$store.dispatch("ADD_EDIT_STAFF", person);
       //window.open('/settings/add-staff?edit=1');
    },
    getAllStaff(){
      fetch(
        this.getGlobalUrl+"checkout/getStaff/"+this.$store.getters.user.id+'?access_token='+this.$store.getters.user.access_token,
        {
          method: "get", // or 'PUT'
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.status == "success") {
              this.$store.dispatch("ADD_BUSINESS_STAFF", data.data);
              this.staff =data.data;   
            } else {
              //this.$swal(data.message);
            }
          }
          //console.log("Success:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
  
  }
  },
  mounted(){
    this.getAllStaff();
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