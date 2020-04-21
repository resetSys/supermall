<template>
  <div class="detailBottomBar">
    <div class="left">
      <span>客服</span>
      <span>店铺</span>
      <span>收藏</span>
    </div>
    <div class="right">
      <div class="addShop" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBottomBar',
  data() {
    return {

    }
  },
  methods:{
    addCart(){
      this.$emit("addCart");
    }
  }
}
</script>

<style scoped>
.detailBottomBar{
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: #ffffff;
  z-index: 5;
  display: flex;
}
.left{
  flex-grow: 3;
  display: flex;
}
.left>span{
  flex-grow:1; 
  text-align: center;
  line-height: 50px;
}
.right{
  flex-grow: 2;
}
.left,.right{
  display: flex;
}
.addShop,.buy{
  text-align: center;
  line-height: 50px;
  flex-grow: 1;
  color: #ffffff;
}
.addShop{
  background-color: #dfc11a;
}
.buy{
  background-color: var(--base-color);
}
</style>
