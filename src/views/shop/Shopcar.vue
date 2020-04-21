<template>
  <div class="shopcar">
    <nav-bar>
      <span slot="center">购物车</span>
    </nav-bar>
    <scroll ref="scroll" class="scroll">
      <goods-list/>
    </scroll>
    <settle/>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar"
import scroll from "components/common/scroll/Scroll"
import goodsList from "./children/GoodsList"
import settle from "./children/Settle"
export default {
  name: 'shopcar',
  data() {
    return {

    }
  },
  components: {
    navBar,
    scroll,
    goodsList,
    settle,
    // toast
  },
  mounted(){
    window.console.log(this.$toast)
  },
}
</script>

<style scoped>
.shopcar{
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.scroll{
  height: calc(100% - 144px);
  width: 100%;
}
</style>
