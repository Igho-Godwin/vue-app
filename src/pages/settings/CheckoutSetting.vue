<template>
  <div id="checkoutSetting">
    <SettingsNav :activeNav="1" />
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-lg-8 col-xl-6">
          <BankInformation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BankInformation from "@/components/settings/BankInformation";
  import SettingsNav from "@/components/settings/SettingsNav";
  export default {
    components: {
      BankInformation,
      SettingsNav
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>