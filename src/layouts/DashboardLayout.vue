<template>
  <div class="dashboard-layout">
    <Sidebar userName="Mary Ekpe" companyName="Konga.com"  />
    This is the dashboard layout Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut error id veniam et odit tempora at possimus, sequi consequatur numquam quas eius delectus quisquam, praesentium hic eaque nulla nemo voluptatum totam in esse ducimus cumque rem incidunt. Et distinctio ad ullam dignissimos. Eum ullam dolorum voluptatibus error laudantium, saepe praesentium nobis quis sit, libero impedit deserunt molestiae! Non, earum. Nesciunt incidunt iusto necessitatibus consequuntur quia asperiores fuga ipsum neque reprehenderit labore inventore cum, odit error a? Vitae consectetur esse cupiditate! Repudiandae repellat a beatae rerum pariatur molestiae non fugit sunt sapiente, dolor accusantium eum impedit! Suscipit maxime ullam quo sit?
    <slot />
  </div>
</template>

<script>
  import Sidebar from "@/layouts/Sidebar.vue";

  export default {
    name: "Dashboard-Layout",
    components: {
      Sidebar
    }
  }
</script>