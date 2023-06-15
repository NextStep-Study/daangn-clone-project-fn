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

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fbf7f2;
}

.main-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
