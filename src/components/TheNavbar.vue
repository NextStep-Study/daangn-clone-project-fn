<template>
  <b-navbar class="navbar-custom" variant="light" expand="md" fixed="top">
    <b-navbar-brand href="#">
      <img src="@/assets/main_logo.png" alt="Logo" class="navbar-logo" />
      당근
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="navbar-toggle-icon">
      <span></span>
      <span></span>
      <span></span>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item @click="goToHome" class="navbar-item">홈</b-nav-item>
        <b-nav-item @click="goToProduct" class="navbar-item"
          >중고거래</b-nav-item
        >
        <b-nav-item @click="goToPost" class="navbar-item">게시판</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item @click="goToLogin" class="navbar-item">로그인</b-nav-item>
        <b-nav-item @click="goToJoin" class="navbar-item">회원 가입</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {
    goToHome() {
      this.$router.push({ name: "AppMain" });
    },
    goToPost() {
      this.$router.push({ name: "AppPost" });
    },
    goToProduct() {
      this.$router.push({ name: "AppProduct" });
    },
  },
};
</script>

<style scoped>
.navbar-custom {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  height: 40px;
}

.navbar-item {
  padding: 0.5rem 1rem;
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.navbar-item:hover,
.navbar-item:focus {
  color: #0047b3;
}

.navbar-toggle-icon {
  color: #333;
}

@media (max-width: 767px) {
  .navbar-item {
    padding: 0.5rem;
    font-size: 14px;
  }
}
</style>
