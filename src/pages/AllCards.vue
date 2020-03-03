<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <AccountSettings />        
      </div>
      <div class="col-lg-6">
        <BankInformation />
      </div>
      <div class="col-lg-6">
        <BusinessLogo />
      </div>
      <div class="col-lg-6">
        <ChangePassword />
      </div>
      <div class="col-lg-6">
        <CompanyInformation />
      </div>
    </div>
      
      
      
      
      
  
  </div>
</template>

<script>
  import AccountSettings from "@/components/settings/AccountSettings";
  import BankInformation from "@/components/settings/BankInformation";
  import BusinessLogo from "@/components/settings/BusinessLogo";
  import ChangePassword from "@/components/settings/ChangePassword";
  import CompanyInformation from "@/components/settings/CompanyInformation";

  export default {
    components: {
      AccountSettings,
      BankInformation,
      BusinessLogo,
      ChangePassword,
      CompanyInformation
    },
  }
</script>