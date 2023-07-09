import { createRouter, createWebHistory } from 'vue-router'
import About from "@/pages/About";
import SicretContent from "@/pages/SicretContent";
import Main from "@/pages/Main";
import PostIdPage from "@/pages/PostIdPage"
const routes = [
  {
    path:'/',
    component:Main
  },
  {
    path:'/about',
    component: About,
  },
  {
    path:'/sicretContent',
    component: SicretContent,
    meta:{
      requiresAuth:true
    }

  },
    {
        path: '/sicretContent/:id',
        component: PostIdPage,
       meta:{
      requiresAuth:true
    }
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
