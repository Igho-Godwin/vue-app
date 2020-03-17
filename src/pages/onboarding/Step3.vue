<template>
  <Onboarding progress="Step 3 of 3" title="Upload Business Logo">
    <Card>
      <div slot="card-body" class="card-body">
        <p
          class="text-grey text-center"
        >We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form @submit="submit($event)">
          <label for="businessLogo" class="logo-showcase">
            <i class="fas fa-camera"></i>
          </label>
          <div class="form-group">
            <input id="businessLogo" type="file" class="form-control" placeholder="Choose file" />
          </div>
          <input type='text' name='businessLogo' id='businessLogo'  v-model='businessLogo' style='display:none;' />
          <button type="submit" class="btn btn-blue btn-block mt-5">Save &amp; Continue</button>
        </form>
      </div>
    </Card>
  </Onboarding>
</template>

<script>
import Onboarding from "@/components/Onboarding";
import Card from "@/components/Card";

export default {
  name: "Step-3",
  components: {
    Onboarding,
    Card
  },
  data() {
    return {
      businessName: "",
      phoneNumber: "",
      website_url: "",
      businessLogo:"mkkjg"
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      console.log(this.$store.getters);
      let payload = this.$store.getters.initial_setup.data;
      payload.business_id = this.$store.getters.user.id;
      payload.company_logo = this.businessLogo;
      fetch(this.getGlobalUrl + "checkout/onboardingSetup", {
        method: "post", // or 'PUT'
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (data.status == "success") {
              console.log('success');
              this.$store.dispatch('CLEAR_INITIAL_SETUP_DATA');
               window.open("/dashboard", "_self");
            } else {
              this.$swal(data.message);
            }
          }
          console.log("Success:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
      //this.$store.dispatch('CLEAR_INITIAL_SETUP_DATA');
      //window.open("/onboarding/3", "_self");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
.logo-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  height: 8rem;
  width: 8rem;
  border: 1px dashed $smoke;
  background-color: $snow;
  font-size: 1.5rem;
  color: $secondary-text;
  cursor: pointer;
  &:hover {
    border-color: $dark-smoke;
  }
}
</style>