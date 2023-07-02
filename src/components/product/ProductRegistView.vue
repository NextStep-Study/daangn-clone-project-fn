<template>
  <div class="product-registration">
    <div class="registration-container">
      <h2 class="registration-title">물건 등록하기</h2>
      <form @submit.prevent="registerProduct">
        <div class="form-group">
          <label for="title">상품</label>
          <input
            id="title"
            class="form-input"
            type="text"
            v-model="product.title"
            required
          />
        </div>

        <div class="form-group">
          <label for="price">가격</label>
          <input
            id="price"
            class="form-input"
            type="text"
            v-model="product.price"
            required
          />
        </div>

        <div class="form-group">
          <label for="description">상품 설명</label>
          <textarea
            id="description"
            class="form-textarea"
            v-model="product.description"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="image">사진</label>
          <input
            id="image"
            class="form-file"
            type="file"
            accept="image/*"
            @change="handleImageChange"
            required
          />
        </div>

        <button
          type="submit"
          class="form-button"
          :disabled="isLoadingSellerInfo || isSubmitting"
        >
          {{ isSubmitting ? "등록 중..." : "등록" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      product: {
        title: "",
        price: "",
        description: "",
        image: null,
        seller: {
          name: "",
          avatar: null,
        },
      },
      isLoadingSellerInfo: true,
      isSubmitting: false,
    };
  },
  computed: {
    ...mapState(["sellerInfo"]),
  },
  created() {
    // 판매자 정보를 Vuex store에서 가져옴 (예시로 sellerInfo로 가정)
    // 필요에 따라 비동기 호출 등으로 변경하여 사용하십시오.
    this.product.seller.name = this.sellerInfo.name;
    this.product.seller.avatar = this.sellerInfo.avatar;
  },
  methods: {
    registerProduct() {
      this.isSubmitting = true;

      // 등록된 물건 정보를 처리하는 로직
      // 예시로 콘솔에 출력함
      console.log("등록된 물건 정보:", this.product);

      // 등록 후 폼 초기화
      this.product.title = "";
      this.product.price = "";
      this.product.description = "";
      this.product.image = null;
      this.product.seller.name = "";
      this.product.seller.avatar = null;

      this.isSubmitting = false;
    },
    handleImageChange(event) {
      const file = event.target.files[0];
      this.product.image = file;
    },
  },
};
</script>

<style scoped>
.product-registration {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.registration-container {
  max-width: 600px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.registration-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.form-input,
.form-textarea,
.form-file {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-textarea {
  resize: vertical;
}

.form-button {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #ff6f0f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
