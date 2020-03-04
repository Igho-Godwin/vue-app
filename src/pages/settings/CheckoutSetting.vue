<template>
  <div id="checkoutSetting">
    <BankInformation />
  </div>
</template>

<script>
  import BankInformation from "@/components/settings/BankInformation";
  export default {
    components: {
      BankInformation
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>