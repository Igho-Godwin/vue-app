<template>
  <div id="accountSetting">
    <SettingsNav :activeNav="3" />
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-lg-6">
          <AccountSettings />
        </div>
        <div class="col-lg-6">
          <ChangePassword />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountSettings from "@/components/settings/AccountSettings";
  import ChangePassword from "@/components/settings/ChangePassword";
  import SettingsNav from "@/components/settings/SettingsNav";
  
  export default {
    components: {
      AccountSettings,
      ChangePassword,
      SettingsNav
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>