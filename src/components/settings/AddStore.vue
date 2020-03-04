<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Add a Store Location</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-row mb-3">
            <label for="storeName" class="caption">NAME OF STORE</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-4">
            <label for="storeAddress" class="caption">ADDRESS OF STORE</label>
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
