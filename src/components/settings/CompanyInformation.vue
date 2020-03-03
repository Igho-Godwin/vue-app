<template>
  <div>
    <Card header="Company Information">
      <div slot="card-body">
        <form>
          <div class="form-row mb-3">
            <label for="businessName" class="caption">BUSINESS NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="phoneNumber" class="caption">PHONE</label>
            <input type="number" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="website" class="caption">WEBSITE</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-4">
            <label for="businessType" class="caption">BUSINESS TYPE</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <button type="submit" class="btn btn-green">Save Changes</button>
        </form>
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from "@/components/Card";

  export default {
    components: {
      Card
    },
  }
</script>
