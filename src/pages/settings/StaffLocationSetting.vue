<template>
  <div id="staffLocationSetting">
    <div class="row">
      <div class="col-lg-6">
        <AllStaff />
      </div>
      <div class="col-lg-6">
        <AllLocations />
      </div>
    </div>
  </div>
</template>

<script>
  import AllStaff from "@/components/settings/AllStaff";
  import AllLocations from "@/components/settings/AllLocations";
  
  export default {
    components: {
      AllStaff,
      AllLocations
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>