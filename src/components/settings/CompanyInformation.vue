<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Company Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="businessName" class="caption">BUSINESS NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-group">
            <label for="phoneNumber" class="caption">PHONE</label>
            <input type="number" class="form-control" id="" required>
          </div>
          <div class="form-group">
            <label for="website" class="caption">WEBSITE</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-group mb-5">
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