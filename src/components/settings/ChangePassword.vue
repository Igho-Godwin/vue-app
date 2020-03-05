<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header">
        <h3>Change Password</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-group">
            <label for="oldPassword" class="caption">OLD PASSWORD</label>
            <input type="password" class="form-control" id="oldPassword" required>
          </div>
          <div class="form-group">
            <label for="newPassword" class="caption">NEW PASSWORD</label>
            <input type="password" class="form-control" id="newPassword" required>
          </div>
          <div class="form-group mb-5">
            <label for="retypePassword" class="caption">RETYPE PASSWORD</label>
            <input type="password" class="form-control" id="retypePassword" required>
          </div>
          <button type="submit" class="btn btn-red">Save Changes</button>
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
