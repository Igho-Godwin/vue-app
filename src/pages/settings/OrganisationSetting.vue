<template>
  <div id="organisationSetting">
    <div class="row">
      <div class="col-lg-6">
        <CompanyInformation />
      </div>
      <div class="col-lg-6">
        <BusinessLogo />
      </div>
    </div>
  </div>
</template>

<script>
  import CompanyInformation from "@/components/settings/CompanyInformation";
  import BusinessLogo from "@/components/settings/BusinessLogo";
  export default {
    components: {
      CompanyInformation,
      BusinessLogo
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>