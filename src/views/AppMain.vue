<template>
  <div class="main-page">
    <b-jumbotron fluid class="hero-section">
      <b-container>
        <h1 class="display-4 hero-title">환경을 생각하는 중고거래</h1>
        <p class="lead hero-description">
          지금 바로 다양한 상품을 확인해보세요!
        </p>
        <b-button variant="primary" class="hero-button">상품 둘러보기</b-button>
      </b-container>
    </b-jumbotron>
    <!-- 나머지 섹션들 추가 -->
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.main-page {
  background-color: #f8f8f8;
  color: #333;
  font-family: Arial, sans-serif;
}

.hero-section {
  /* background-image: url("background-image.jpg"); */
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-description {
  margin-bottom: 30px;
}

.hero-button {
  padding: 12px 30px;
}

/* 나머지 섹션들의 스타일 추가 */
</style>
