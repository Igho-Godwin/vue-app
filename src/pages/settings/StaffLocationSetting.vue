<template>
  <div id="staffLocationSetting">
    <SettingsNav :activeNav="4" />
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-lg-6">
          <AllStaff />
        </div>
        <div class="col-lg-6">
          <AllLocations />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AllStaff from "@/components/settings/AllStaff";
  import AllLocations from "@/components/settings/AllLocations";
  import SettingsNav from "@/components/settings/SettingsNav";

  export default {
    components: {
      AllStaff,
      AllLocations,
      SettingsNav
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>