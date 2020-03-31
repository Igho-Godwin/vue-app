<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <div class="justify-content-between align-items-center d-flex">
            <h3>All Locations</h3>
            <router-link to="/settings/add-location" class="btn btn-blue btn-sm">Add New Location</router-link>
        </div>
      </div>
      <div slot="card-body" class="card-body">
        <table class="table card-body__table">
          <thead class="bg-snow">
            <tr>
              <th scope="col" class="caption">NAME</th>
              <th scope="col" class="caption">ADDRESS</th>
              <th scope="col" class="caption">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="location in locations" :key="location.id">
              <td><p>{{location.store_name}}</p></td>
              <td><p>{{location.location}}</p></td>
              <td><p>
                  <a href="#">Edit&nbsp;</a>
                  <a href="#" class="text-red" @click='deleteLocation(location.id)'>&nbsp;Delete</a>    
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
        locations: []
     }
  },
  methods:{
    deleteLocation(locationId){
        fetch(
        this.getGlobalUrl+"checkout/location/delete/"+locationId+'?access_token='+this.$store.getters.user.access_token,
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
    editLocation(){
       //this.$store.dispatch("ADD_EDIT_STAFF", person);
       //window.open('/settings/add-staff?edit=1');
    },
    getLocations(){
      fetch(
        this.getGlobalUrl+"checkout/getLocations/"+this.$store.getters.user.id+'?access_token='+this.$store.getters.user.access_token,
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
              this.locations = data.data;   
            } 
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }

  },
  mounted(){
    this.getLocations();
  }, 
  props: [
      'name', 'address'
    ]
  }
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
  .card-body__table {
    border: solid 1px $smoke;
  }
</style>