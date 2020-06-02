<template>
  <div class="detailBottomBar">
    <div class="left">
      <div>
        <img src="~assets/images/detail/shop.png" alt="店铺">
        <span>店铺</span>
      </div>
      <div @click="handleFavori">
        <img v-if="favori" src="~assets/images/detail/favori_active.png" alt="收藏">
        <img v-else src="~assets/images/detail/favori.png" alt="收藏">
        <span>收藏</span>
      </div>
      <div>
        <img src="~assets/images/detail/chat.png" alt="客服">
        <span>客服</span>
      </div>
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
      favori:false,
    }
  },
  methods:{
    addCart(){
      this.$emit("addCart");
    },
    /**点击收藏 */
    handleFavori(){
      this.favori = !this.favori;
      if (this.favori) {
        this.$toast.show("已收藏",1000);
      } else {
        this.$toast.show("已取消",1000);
      }
    },
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
.left>div{
  flex-grow:1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.left>div>img{
  height: 20px;
  width: auto;
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
