<template>
  <div class="product-detail">
    <div class="product-image-wrapper">
      <img :src="product.image" :alt="product.title" class="product-image" />
    </div>
    <div class="product-info">
      <div class="seller-info">
        <div class="seller-avatar">
          <img :src="product.seller.avatar" :alt="product.seller.name" />
        </div>
        <div class="seller-details">
          <div class="seller-name">{{ product.seller.name }}</div>
          <div class="seller-location">{{ product.seller.location }}</div>
        </div>
      </div>
      <h2 class="product-title">{{ product.title }}</h2>
      <h3 class="product-price">{{ product.price }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <button class="chat-button" @click="startChat">채팅하기</button>
    </div>
  </div>
</template>

<script>
import { createChatRoom } from "@/api/chat";
import io from "socket.io-client";
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.product = {
      id: 1,
      title: "상품 제목",
      price: "10,000원",
      description:
        "동해 물과 백두산이 마르고 닳도나라 만세 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.",
      image: "https://dummyimage.com/600x400/000/fff.png&text=sample",
      seller: {
        name: "판매자 이름",
        avatar: "https://dummyimage.com/40x40/000/fff.png&text=avatar",
      },
      buyer: null,

      // this.product = getProductById(this.$route.params.productId);
      // 현재 로그인 되어있는 사람의 아이디를 추가
    };
    // 소켓 연결
    this.socket = io("http://localhost:3000");
    // 채팅방 생성 이벤트 수신
    this.socket.on("chatRoomCreated", (chatRoom) => {
      // 생성된 채팅방 정보 처리
      console.log("채팅방 생성:", chatRoom);
    });
  },
  methods: {
    createChatRoom() {
      createChatRoom(this.product)
        .then((response) => {
          const chatRoomId = response.data.chatRoomId;
          // 생성된 채팅방으로 이동
          this.$router.push(`/chat:${chatRoomId}`);
        })
        .catch((error) => {
          console.error("채팅방 생성 실패:", error);
        });
    },
  },
};
</script>

<style scoped>
/* 스타일을 원하는 대로 수정해주세요. */
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 677px;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  max-width: 677px; /* 길이가 고정되도록 최대 너비 설정 */
}

.product-title {
  padding-top: 23px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  white-space: nowrap; /* 제목이 너무 길어도 한 줄로 표시되도록 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
  white-space: nowrap; /* 가격이 너무 길어도 한 줄로 표시되도록 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-description {
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  height: 300px;
}
.product-image {
  border-radius: 8px;
  position: relative;
  min-width: 100%;
}
.seller-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 23px;
  border-bottom: 1px solid #e9ecef;
  width: 677px;
}

.seller-avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.seller-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.seller-details {
  display: flex;
  flex-direction: column;
}

.seller-name {
  font-size: 16px;
  font-weight: bold;
}

.seller-location {
  font-size: 14px;
  color: #888;
}

.chat-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ff6f0f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
