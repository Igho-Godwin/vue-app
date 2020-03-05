<template>
  <div>
    <Card>
      <div slot="card-header" class="card-header text-white card--bg pb-3 pt-4">
        <p class="caption text-white mb-2">STEP 1 OF 3</p>
        <h3>Verify Identity of Customer</h3>
      </div>
      <div slot="card-body" class="card-body">
        <form>
          <div class="form-row mb-5">
            <label for="reachID" class="caption">ENTER REACH ID</label>
            <input type="text" class="form-control" id="" required>
          </div>
          <div class="card__text-end">
            <button type="submit" class="btn btn-green">Verify Customer</button>
          </div>
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
    }
  }
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
  .card--bg {
    background: $brand-gradient;
  }
  .card__text-end {
    text-align: end;
  }
</style>