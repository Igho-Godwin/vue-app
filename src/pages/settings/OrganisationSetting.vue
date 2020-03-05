<template>
  <div id="organisationSetting">
    <SettingsNav :activeNav="2" />
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-lg-6">
          <CompanyInformation />
        </div>
        <div class="col-lg-6">
          <BusinessLogo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CompanyInformation from "@/components/settings/CompanyInformation";
  import BusinessLogo from "@/components/settings/BusinessLogo";
  import SettingsNav from "@/components/settings/SettingsNav";
  export default {
    components: {
      CompanyInformation,
      BusinessLogo,
      SettingsNav
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>