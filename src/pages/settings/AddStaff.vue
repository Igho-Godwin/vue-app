<template>
  <div id="addStaff">
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-lg-9 col-xl-6">
          <AddStaff />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddStaff from "@/components/settings/AddStaff";
  
  export default {
    components: {
      AddStaff
    },
    mounted() {
      this.$emit('headerTitle')
    }
  }
</script>