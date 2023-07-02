<template>
  <div>
    <h1 class="page-title">인기 상품</h1>
    <div class="card-container">
      <b-card
        v-for="product in products"
        :key="product.id"
        :img-src="product.image"
        img-alt="상품 이미지"
        img-top
        class="product-card"
        @click="goToProductDetail(product.id)"
      >
        <h4 class="card-title">{{ product.title }}</h4>
        <h5 class="price">{{ product.price }}</h5>
      </b-card>
    </div>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";

export default {
  components: {
    BCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "상품 1",
          price: "10,000원",
          image: "https://dummyimage.com/600x400/000/fff.png&text=sample",
        },
        {
          id: 2,
          title: "상품 2",
          price: "20,000원",
          image: "https://dummyimage.com/600x400/000/fff.png&text=sample",
        },
        {
          id: 3,
          title: "상품 3",
          price: "30,000원",
          image: "https://dummyimage.com/600x400/000/fff.png&text=sample",
        },
        {
          id: 4,
          title: "상품 4",
          price: "20,000원",
          image: "https://dummyimage.com/600x400/000/fff.png&text=sample",
        },
        {
          id: 5,
          title: "상품 5",
          price: "30,000원",
          image: "https://dummyimage.com/600x400/000/fff.png&text=sample",
        },
        // 추가적인 상품 데이터...
      ],
    };
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push(`/products/detail:${productId}`);
    },
  },
};
</script>

<style scoped>
/* 기존 스타일 */

.page-title {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: start;
  padding: 0 200px; /* 위아래 여백 추가 */
}

.card-title,
.price {
  text-align: left; /* 좌측 정렬로 변경 */
  margin: 0;
  border: none; /* 테두리 제거 */
}

.price {
  font-weight: bold;
}

.product-card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>
