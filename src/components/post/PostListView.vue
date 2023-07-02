<template>
  <div class="board">
    <h2>동네 생활</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-header">
          <h3 class="post-title" @click="goToPostDetail(post.id)">
            {{ post.title }}
          </h3>
          <div class="post-info">
            <span class="comment-count">
              <b-icon icon="chat-dots"></b-icon> {{ post.comments.length }}
            </span>
            <span class="like-count" @click="increaseLikes(post.id)">
              <b-icon icon="heart"></b-icon> {{ post.likes }}
            </span>
          </div>
        </div>
        <div class="post-content">{{ truncateText(post.content, 100) }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "첫 번째 글",
          content: "첫 번째 글의 내용입니다.",
          comments: [
            { id: 1, content: "댓글 1" },
            { id: 2, content: "댓글 2" },
          ],
          likes: 10,
        },
        {
          id: 2,
          title: "두 번째 글",
          content: "두 번째 글의 내용입니다.",
          comments: [{ id: 3, content: "댓글 3" }],
          likes: 5,
        },
      ],
    };
  },
  methods: {
    goToPostDetail(postId) {
      this.$router.push({ name: "PostDetail", params: { id: postId } });
    },
    increaseLikes(postId) {
      const post = this.posts.find((post) => post.id === postId);
      if (post) {
        post.likes++;
      }
    },
    truncateText(text, length) {
      if (text.length <= length) {
        return text;
      } else {
        return text.slice(0, length) + "...";
      }
    },
  },
};
</script>

<style scoped>
.board {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.post-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.post-info {
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
}

.comment-count,
.like-count {
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}

.b-icon,
.b-icon-lg {
  margin-right: 5px;
}

.post-content {
  font-size: 14px;
  color: #555;
}
</style>
