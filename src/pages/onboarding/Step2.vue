<template>
  <Onboarding progress="Step 2 of 3" title="Add Company's Information">
    <Card>
      <div slot="card-body" class="card-body">
        <form @submit="submit($event)">
          <div class="form-group">
            <label for="businessName" class="caption">CAC Business Name</label>
            <input
              type="text"
              v-model="businessName"
              class="form-control"
              id="businessName"
              required
            />
          </div>
          <div class="form-group">
            <label for="PhoneNumber" class="caption">Phone</label>
            <input
              type="phone"
              v-model="phoneNumber"
              class="form-control"
              id="phoneNumber"
              required
            />
          </div>
          <div class="form-group">
            <label for="emailAddress" class="caption">Website</label>
            <input
              type="url"
              v-model="website_url"
              class="form-control"
              id="emailAddress"
              aria-describedby="emailAddress"
              required
            />
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
  name: "Step-2",
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
      let payload = {
        cac_business_name: this.businessName,
        phone_no: this.phoneNumber,
        website_url: this.website_url
      };
      this.$store.dispatch('ADD_INITIAL_SETUP_DATA',payload);
      window.open("/onboarding/3", "_self");
    },
  }
};
</script>