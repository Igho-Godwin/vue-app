<template>
  <div>
    <Card header="Account Settings">
      <div slot="card-body">
        <form>
          <div class="form-row mb-3">
            <label for="firstName" class="caption">FIRST NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="lastName" class="caption">LAST NAME</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="form-row mb-3">
            <label for="Email" class="caption">WORK EMAIL</label>
            <input type="email" class="form-control" id="" required>
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
