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
      <div class="col-lg-6">
        <AllStaff />
      </div>
      <div class="col-lg-6">
        <AllLocations />
      </div>
      <div class="col-lg-6">
        <AddLocation />
      </div>
      <div class="col-lg-6">
        <AddStaff />
      </div>
      <div class="col-lg-8">
        <TransactionsAdmin />
      </div>  
      <div class="col-lg-6">
        <TransactionsStaff />
      </div>  
      <div class="col-lg-6">
        <GrantLoan1 />
      </div>
      <div class="col-lg-6">
        <GrantLoan2 />
      </div>
      <div class="col-lg-6">
        <GrantLoan3 />
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
  import AllStaff from "@/components/settings/AllStaff";
  import AllLocations from "@/components/settings/AllLocations";
  import AddLocation from "@/components/settings/AddLocation";
  import AddStaff from "@/components/settings/AddStaff";
  import TransactionsAdmin from "@/components/checkout/TransactionsAdmin";
  import TransactionsStaff from "@/components/checkout/TransactionsStaff";
  import GrantLoan1 from "@/components/grantloan/GrantLoan1";
  import GrantLoan2 from "@/components/grantloan/GrantLoan2";
  import GrantLoan3 from "@/components/grantloan/GrantLoan3";
  export default {
    components: {
      AccountSettings,
      BankInformation,
      BusinessLogo,
      ChangePassword,
      CompanyInformation,
      AllStaff,
      AllLocations,
      AddLocation,
      AddStaff,
      TransactionsAdmin,
      TransactionsStaff,
      GrantLoan1,
      GrantLoan2,
      GrantLoan3,
    },
  }
</script>