<template>
  <Onboarding progress="Step 3 of 3" title="Upload Business Logo">
    <Card>
      <div slot="card-body" class="card-body">
        <p
          class="text-grey text-center"
        >We recommend you use a square logo with dimensions 128px by 128px for best results.</p>
        <form>
          <label for="businessLogo" class="logo-showcase">
            <i class="fas fa-camera"></i>
          </label>
          <div class="form-group">
            <input id="businessLogo" type="file" class="form-control" placeholder="Choose file" />
          </div>
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
      website_url: ""
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      let payload = this.$store.getters.initial_setup_data;
      payload.company_logo = document.getElementById("businessLogo");
      fetch(this.getGlobalUrl + "checkout/login", {
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
              this.$store.dispatch("ADD_USER", data.data);
              console.log(this.$store.getters.user.user);
              window.open("/onboarding/1", "_self");
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