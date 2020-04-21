<template>
  <div class="goodsList">
    <div class="goodsItem" v-for="(item,index) in dataList" :key="index">
      <div class="left">
          <span @click="toggle(index)">
            <img v-show="item.check" src="~assets/images/goodsList/checked.png" alt="">
          </span>
      </div>
      <div class="center">
        <img :src="item.img" alt="">
      </div>
      <div class="right">
        <p class="title">{{item.title}}</p>
        <p class="params">
          <span class="price">￥{{item.price}}</span>
          <span class="num">
            <button @click="reduce(index)">-</button>
            {{item.num}}
            <button @click="add(index)">+</button>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'goodsList',
  data() {
    return {

    }
  },
  computed:{
    dataList(){
      return this.$store.state.cartData
    },
  },
  components: {

  },
  methods:{
    toggle(index){
      // window.console.log(index)
      this.$store.commit("toggleCheck",index);
    },
    add(index){
      this.$store.commit("add",index);
    },
    reduce(index){
      this.$store.commit("reduce",index);
    },
  }
}
</script>

<style scoped>
.goodsList{
  width: 100%;
  height: auto;
}
.goodsItem{
  height: 100px;
  width: 100%;
  padding: 10px;
  display: flex;
  box-sizing: border-box;
}
.goodsItem>div{
  display: inline-block;
}
.left{
  height: 80px;
  width: 30px;
  line-height: 85px;
  background-color: #ffffff;
  text-align: center;
}
.left>span{
  height: 20px;
  width: 20px;
  line-height: 0;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  border: .5px solid #d81e06;
}
.left>span>img{
  width: 100%;
  height: 100%;
}
.center{
  height: 80px;
  width: 80px;
  overflow: hidden;
}
.center>img{
  height: 100%;
  width: auto;
}
.right{
  height: 80px;
  padding-left: 5px;
  width: calc(100% - 125px);
  background-color: #ffffff;
}
.title{
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.params{
  display: flex;
  padding: 0 5px;
  height: 40px;
  line-height: 40px;
}
.params>span{
  flex-grow: 1;
}
.price{
  color: var(--base-color);
  font-size: 16px;
}
.num{
  text-align: right;
}
.num>button{
  width: 25px;
  height: 25px;
}
</style>
