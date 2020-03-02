<template>
<div>
  <div class="bank-information text-start bg-white">
    <h3>Bank Information</h3>
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
</div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .bank-information {
    max-width: 50rem;
    padding: 2rem 1.5rem;
    justify-content: start;
    border-radius: 0.25rem;
  }

  .text-start {
    text-align: start;
  }
</style>