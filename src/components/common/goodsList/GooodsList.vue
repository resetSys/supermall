<template>
  <div class="goods-list">
    <div v-for="(item,index) in goods" :key="index" class="goods-list-item"
      @click="detail(item.id)">
      <img v-lazy="item.img" :alt="item.title" @load="imgLoad">
      <p>{{item.title}}</p>
      <p>价格:{{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  
  methods:{
   imgLoad(){
    this.$bus.$emit("imgLoaded");
   },
   detail(id){
    // window.console.log(this.$router)
    window.console.log(id)
    this.$router.push({
      path:"/detail",
      query:{
        id:id
      }
      })
   }
  }
}
</script>

<style scoped>
.goods-list{
  width: 100%;
  height: auto;
  *zoom: 1;
}
.goods-list::after{
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.goods-list-item{
  float: left;
  width: 50%;
}
.goods-list-item>img{
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}
.goods-list-item>p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center
}

</style>
