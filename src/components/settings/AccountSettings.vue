<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Account Settings</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="firstName" class="caption">FIRST NAME</label>
            <input type="text" class="form-control" id="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName" class="caption">LAST NAME</label>
            <input type="text" class="form-control" id="lastName" required>
          </div>
          <div class="form-group mb-5">
            <label for="workEmail" class="caption">WORK EMAIL</label>
            <input type="email" class="form-control" id="workEmail" required>
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
