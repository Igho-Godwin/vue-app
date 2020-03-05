<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Bank Information</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="bankName" class="caption">BANK NAME</label>
              <input type="text" class="form-control" id="bankName" required>
            </div>
            <div class="col-md-6 form-group">
              <label for="accountNumber" class="caption">ACCOUNT NUMBER</label>
              <input type="text" class="form-control" id="accountNumber" required>
            </div>
          </div>
          <div class="form-group mb-5">
            <label for="accountName" class="caption">ACCOUNT NAME</label>
            <input type="text" class="form-control" id="accountName" required>
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
