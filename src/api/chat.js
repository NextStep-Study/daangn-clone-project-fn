import { apiInstance } from "./index.js";

const api = apiInstance();

function createChatRoom(product, success, fail) {
  api.post(`/chat-room`, JSON.stringify(product)).then(success).catch(fail);
}
export { createChatRoom };
