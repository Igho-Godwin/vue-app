<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Bank Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-row">
            <div class="col-md-6 form-group mb-3">
              <label for="bankName" class="caption">BANK NAME</label>
              <input type="text" class="form-control" id="validationCustom01" required>
            </div>
            <div class="col-md-6 form-group mb-3">
              <label for="accountNumber" class="caption">ACCOUNT NUMBER</label>
              <input type="text" class="form-control" id="validationCustom02" required>
            </div>
          </div>
          <div class="form-group mb-4">
            <label for="accountName" class="caption">ACCOUNT NAME</label>
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
