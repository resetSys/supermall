<template>
  <div id="app">
    <keep-alive exclude="detailNavBar">
      <router-view/>
    </keep-alive>
    <tabbar>
        <tabbar-item path="/home">
          <img slot="tabbar-img" src="~assets/images/tabbar/classify.png" alt="">
          <img slot="tabbar-img-active" src="~assets/images/tabbar/classify_active.png" alt="">
          <p slot="tabbar-text">首页</p>
        </tabbar-item>

        <tabbar-item path="/classify">
          <img slot="tabbar-img" src="~assets/images/tabbar/shopcar.png" alt="">
          <img slot="tabbar-img-active" src="~assets/images/tabbar/shop_car.png" alt="">
          <p slot="tabbar-text">分类</p>
        </tabbar-item>

        <tabbar-item path="/shopcar">
          <img slot="tabbar-img" src="~assets/images/tabbar/profile.png" alt="">
          <img slot="tabbar-img-active" src="~assets/images/tabbar/profile_active.png" alt="">
          <p slot="tabbar-text">购物车</p>
        </tabbar-item>

        <tabbar-item path="/profile">
          <img slot="tabbar-img" src="~assets/images/tabbar/home.png" alt="">
          <img slot="tabbar-img-active" src="~assets/images/tabbar/home_active.png" alt="">
          <p slot="tabbar-text">我的</p>
        </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/Tabbar"
import tabbarItem from "components/common/tabbar/TabbarItem"

export default {
  name: 'app',
  components:{
    tabbar,
    tabbarItem,
  },
}
</script>

<style>
@import "./assets/css/base.css";
#app{
  height: 100%;
}
</style>
