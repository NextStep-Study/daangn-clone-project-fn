<template>
  <div id="app" class="app-container">
    <Navbar />

    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped></style>
