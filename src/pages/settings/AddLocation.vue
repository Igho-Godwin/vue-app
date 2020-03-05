<template>
  <div id="addLocation">
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-lg-9 col-xl-6">
          <AddLocation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddLocation from "@/components/settings/AddLocation";
  
  export default {
    components: {
      AddLocation
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>