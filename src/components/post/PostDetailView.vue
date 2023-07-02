<template>
  <div class="post-detail">
    <h2 class="post-title">{{ post.title }}</h2>
    <div class="post-author">
      <b-icon icon="person-fill"></b-icon>
      <span>{{ post.author }}</span>
    </div>
    <div class="post-content">{{ post.content }}</div>
    <div class="post-comments">
      <h3 class="comments-heading">댓글</h3>
      <ul class="comment-list">
        <li
          v-for="comment in post.comments"
          :key="comment.id"
          class="comment-item"
        >
          <div class="comment-content">{{ comment.content }}</div>
          <div class="comment-author">
            <b-icon icon="person-fill"></b-icon>
            <span>{{ comment.author }}</span>
          </div>
          <div class="comment-actions" v-if="comment.author === member">
            <button class="comment-edit" @click="editComment(comment)">
              수정
            </button>
            <button class="comment-delete" @click="deleteComment(comment)">
              삭제
            </button>
          </div>
        </li>
      </ul>
      <form class="comment-form" @submit.prevent="addComment">
        <input type="text" v-model="newComment" placeholder="댓글 작성" />
        <button type="submit">등록</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    member() {
      //   return this.$store.state.member;
      return "삭제가능";
    },
  },
  data() {
    return {
      post: {
        title: "게시글 제목",
        content: "게시글 내용",
        author: "작성자",
        comments: [
          { id: 1, content: "댓글 1", author: "삭제가능" },
          { id: 2, content: "댓글 2", author: "댓글 작성자 2" },
        ],
      },
      newComment: "",
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim()) {
        const comment = { content: this.newComment, author: this.member };
        this.post.comments.push(comment);
        this.newComment = "";
      }
    },
    editComment(comment) {
      console.log(comment);
    },
    deleteComment(comment) {
      console.log(comment);
      // 댓글 삭제 로직을 구현합니다.
    },
  },
};
</script>

<style scoped>
.post-detail {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  margin: 0px 200px;
}

.post-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.post-author {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #888;
}

.post-author b-icon {
  margin-right: 5px;
}

.post-content {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.post-comments {
  margin-top: 30px;
}

.comments-heading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-item {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment-content {
  font-size: 14px;
  margin-bottom: 5px;
}

.comment-author {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #888;
}

.comment-author b-icon {
  margin-right: 5px;
}

.comment-actions {
  margin-top: 5px;
}

.comment-form {
  margin-top: 20px;
}

.comment-form input[type="text"] {
  width: 200px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.comment-form button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.comment-edit,
.comment-delete {
  padding: 5px 10px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.comment-edit {
  background-color: #4caf50;
}

.comment-delete {
  background-color: #f44336;
}
</style>
