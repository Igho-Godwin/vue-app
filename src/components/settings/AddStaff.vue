<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Add Staff</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="firstName" class="caption">First Name</label>
              <input type="text" class="form-control" id="firstName" required>
            </div>
            <div class="col-md-6 form-group">
              <label for="lastName" class="caption">Last Name</label>
              <input type="text" class="form-control" id="lastName" required>
            </div>
          </div>
          <div class="form-group">
            <label for="workEmail" class="caption">Work Email Address</label>
            <input type="email" class="form-control" id="workEmail" required>
          </div>
          <div class="form-group">
            <label for="assignLocation" class="caption">Assign to a Location</label>
            <input type="text" class="form-control" id="assignLocation" required>
          </div>
          <div class="form-group mb-5">
            <label for="createPassword" class="caption">Create Password</label>
            <input type="password" class="form-control" id="createPassword" required>
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
