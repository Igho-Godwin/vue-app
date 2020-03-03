<template>
  <Onboarding progress="Step 2 of 3" title="Add Company's Information">
    <Card>
      <div slot="card-body">
        <form>
          <div class="form-group">
            <label for="businessName" class="caption">CAC Business Name</label>
            <input type="text" class="form-control" id="businessName" required>
          </div>
          <div class="form-group">
            <label for="PhoneNumber" class="caption">Phone</label>
            <input type="phone" class="form-control" id="phoneNumber" required>
          </div>
          <div class="form-group">
            <label for="emailAddress" class="caption">Website</label>
            <input type="email" class="form-control " id="emailAddress" aria-describedby="emailAddress" required>
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
    }
  }
</script>