<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Add Staff</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-row">
            <div class="col-md-6 form-group mb-3">
              <label for="firstName" class="caption">FIRST NAME</label>
              <input type="text" class="form-control" id="" required>
            </div>
            <div class="col-md-6 form-group mb-3">
              <label for="lastName" class="caption">LAST NAME</label>
              <input type="text" class="form-control" id="" required>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="workEmail" class="caption">WORK EMAIL ADDRESS</label>
            <input type="email" class="form-control" id="" required>
          </div>
          <div class="form-group mb-3">
            <label for="location" class="caption">ASSIGN TO A LOCATION</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-group mb-4">
            <label for="password" class="caption">CREATE PASSWORD</label>
            <input type="password" class="form-control" id="" required>
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
