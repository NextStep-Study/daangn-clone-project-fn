import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppMain",
    component: () => import("@/views/AppMain"),
  },

  {
    path: "/chat",
    name: "AppChat",
    component: () => import("@/views/AppChat"),
  },

  {
    path: "/member",
    name: "AppMember",
    component: () => import("@/views/AppMember"),
  },
  /********* Post start **************/
  {
    path: "/posts",
    name: "AppPost",
    redirect: "/posts/list",

    component: () => import("@/views/AppPost"),
    children: [
      {
        path: "list",
        name: "PostList",
        component: () => import("@/components/post/PostListView"),
      },
      {
        path: "detail:postId",
        name: "PostDetail",
        component: () => import("@/components/post/PostDetailView"),
      },
      {
        path: "regist",
        name: "PostRegist",
        component: () => import("@/components/post/PostRegistView"),
      },
      {
        path: "modify:postId",
        name: "PostModify",
        component: () => import("@/components/post/PostModifyView"),
      },
    ],
  },

  /********* Post end **************/

  /********* Product start **************/
  {
    path: "/products",
    name: "AppProduct",
    redirect: "/products/list",
    component: () => import("@/views/AppProduct"),
    children: [
      {
        path: "list",
        name: "ProductList",
        component: () => import("@/components/product/ProductListView"),
      },
      {
        path: "detail:productId",
        name: "ProductDetail",
        component: () => import("@/components/product/ProductDetailView"),
      },
      {
        path: "regist",
        name: "ProductRegist",
        component: () => import("@/components/product/ProductRegistView"),
      },
      {
        path: "modify:productId",
        name: "ProductModify",
        component: () => import("@/components/product/ProductModifyView"),
      },
    ],
  },

  /********* Product end **************/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
