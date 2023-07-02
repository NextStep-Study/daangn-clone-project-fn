<template>
  <div class="post-edit">
    <h2 class="edit-heading">게시글 수정</h2>
    <form @submit.prevent="updatePost">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" v-model="post.title" id="title" required />
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea v-model="post.content" id="content" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="submit-btn">수정</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      },
    };
  },
  methods: {
    updatePost() {
      // 게시글 수정 로직을 구현합니다.
      console.log("게시글이 수정되었습니다.");
    },
  },
};
</script>

<style scoped>
.post-edit {
  padding: 20px;
}

.edit-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  padding: 8px 16px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
