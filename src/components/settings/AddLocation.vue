<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Add a Store Location</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="storeName" class="caption">Name of Store</label>
            <input type="text" class="form-control" id="storeName" required>
          </div>
          <div class="form-group mb-5">
            <label for="storeAddress" class="caption">Address of Store</label>
            <input type="text" class="form-control" id="storeAddress" required>
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
