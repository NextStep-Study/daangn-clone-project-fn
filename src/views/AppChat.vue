<template>
  <div>
    <!-- 채팅방 헤더 -->
    <h2>{{ chatRoom.product.title }}</h2>
    <p>{{ chatRoom.product.description }}</p>
    <p>{{ chatRoom.product.price }}</p>

    <!-- 채팅 메시지 출력 -->
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.sender }}: {{ message.content }}
      </li>
    </ul>

    <!-- 메시지 입력 폼 -->
    <form @submit.prevent="sendMessage">
      <input
        v-model="messageInput"
        type="text"
        placeholder="메시지를 입력하세요"
      />
      <button type="submit">전송</button>
    </form>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      chatRoom: {
        product: {
          title: "상품 제목",
          description: "상품 설명",
          price: "상품 가격",
        },
        id: "채팅방 ID",
      },
      messages: [],
      messageInput: "",
      socket: null,
    };
  },
  methods: {
    sendMessage() {
      // 메시지 전송
      this.socket.emit("sendMessage", {
        chatRoomId: this.chatRoom.id,
        content: this.messageInput,
      });

      // 입력 필드 초기화
      this.messageInput = "";
    },
  },
  created() {
    // 소켓 연결
    this.socket = io("http://localhost:3000");

    // 채팅 메시지 수신
    this.socket.on("receiveMessage", (message) => {
      // 새로운 메시지를 배열에 추가
      this.messages.push(message);
    });
  },
};
</script>
