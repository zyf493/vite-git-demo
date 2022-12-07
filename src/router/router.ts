
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[]=[
    {
       path:"/",
       name:"index",
       meta:{title:"首页"},
       component:()=>import("../components/HelloWorld.vue")
      
    },{
        path:"/login",
       name:"login",
       meta:{title:"登录"},
       component:()=>import("../index/login.vue")
    }]

    const router = createRouter({
        history: createWebHistory(),
        routes,
      })
      export default router;
