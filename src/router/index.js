//配置路由相关内容
import Vue from "vue"
import VueRouter from "vue-router";
const Home = () => import("views/home/Home")
const Classify = () => import("views/classify/Classify")
const Shopcar = () => import("views/shop/Shopcar")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail.vue")
const Search = () => import("views/search/Search.vue")
const Result = () => import("views/result/Result.vue")

Vue.use(VueRouter);

const routes = [{
  path:"/",
  redirect:"home"
},{
  path:"/home",
  component:Home,
},{
  path:"/classify",
  component:Classify
},{
  path:"/shopcar",
  component:Shopcar
},{
  path:"/profile",
  component:Profile
},{
  path:"/detail",
  component:Detail
},{
  path:"/search",
  component:Search
},{
  path:"/result",
  component:Result
}]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router;