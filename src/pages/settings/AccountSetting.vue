<template>
  <div id="accountSetting">
    <div class="row">
      <div class="col-lg-6">
        <AccountSettings />
      </div>
      <div class="col-lg-6">
        <ChangePassword />
      </div>
    </div>
  </div>
</template>

<script>
  import AccountSettings from "@/components/settings/AccountSettings";
  import ChangePassword from "@/components/settings/ChangePassword";
  
  export default {
    components: {
      AccountSettings,
      ChangePassword
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>