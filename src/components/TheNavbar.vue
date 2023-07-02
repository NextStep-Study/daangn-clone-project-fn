<template>
  <b-navbar class="navbar-custom" variant="light" expand="md" fixed="top">
    <b-navbar-brand href="#" class="navbar-brand">
      <img src="@/assets/main_logo.png" alt="Logo" class="navbar-logo" />
      당근
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item @click="goToHome" class="navbar-item">홈</b-nav-item>
        <b-nav-item @click="goToProduct" class="navbar-item"
          >중고거래</b-nav-item
        >
        <b-nav-item @click="goToPost" class="navbar-item">게시판</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="글쓰기" right>
          <b-nav-item @click="goToProductRegist" class="navbar-item">
            내 물건 판매하기
          </b-nav-item>
          <b-nav-item @click="goToJoin" class="navbar-item">
            동내 생활
          </b-nav-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template #button-content>
            <b-icon icon="people" font-scale="2"></b-icon>
          </template>
          <b-dropdown-item @click="goToLogin" v-if="!isLoggedIn">
            로그인
          </b-dropdown-item>
          <b-dropdown-item @click="goToJoin" v-if="!isLoggedIn">
            회원 가입
          </b-dropdown-item>
          <b-dropdown-item @click="goToMyPage" v-if="isLoggedIn">
            마이페이지
          </b-dropdown-item>
          <b-dropdown-item @click="logout" v-if="isLoggedIn">
            로그아웃
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  computed: {},
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
    goToProductRegist() {
      this.$router.push({ name: "ProductRegist" });
    },
    goToLogin() {
      // 로그인 페이지로 이동하는 로직을 구현합니다.
    },
    goToJoin() {
      // 회원 가입 페이지로 이동하는 로직을 구현합니다.
    },
    goToMyPage() {
      // 마이페이지로 이동하는 로직을 구현합니다.
    },
    logout() {
      // 로그아웃 로직을 구현합니다.
    },
  },
};
</script>

<style scoped>
.navbar-custom {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
}

.navbar-logo {
  height: 40px;
  margin-right: 0.5rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-item {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.navbar-item:hover,
.navbar-item:focus {
  color: #fff;
}

.navbar-toggle-icon {
  color: #333;
}

.navbar-icon {
  margin-right: 0.5rem;
}

.navbar-nav.ml-auto {
  display: flex;
  align-items: center;
}

@media (max-width: 767px) {
  .navbar-item {
    padding: 0.5rem;
    font-size: 14px;
  }
}
</style>
