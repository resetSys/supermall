<template>
  <div class="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar @detialTitle="detialTitle"/>
    <!-- 轮播图 -->
    <carousel class="detail-carousel" :carouselImgs="carouselImgs"/>
    <div class="goods-msg">
      <div class="goods-tit">
        {{goods.title}}
      </div>
      <div class="goods-prams">
        <p id="prams-price">￥{{goods.price}}</p>
      </div>
    </div>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
//组件
import detailNavBar from "./child/DetailNavBar";
import carousel from "components/common/carousel/Carousel";
import detailBottomBar from "./child/DetailBottomBar";
//网络
import {request} from "@/network/request";

export default {
  name: 'detail',
  data() {
    return {
      carouselImgs:[],
      goods:{
        classify:null,
        id:null,
        imgsrc:null,
        info:null,
        price:null,
        title:null,
      },
      pramsId:null,//路由参数
    }
  },
  components: {
    detailNavBar,
    carousel,
    detailBottomBar
  },
  methods:{
    detialTitle(index){
      window.console.log(index);
    },
    addCart(){//添加到购物车
      this.$store.commit('addCart',this.goods);
      this.$toast.methods.show('添加成功',500);
    },
    //获取该商品数据
    getGoods(){
      request({
        url:"/get_item.php",
        method:"post",
        data:{
          id:this.pramsId
        }
      }).then((res) => {
        window.console.log(res);
        for (let i = 0; i < 3; i++) {
          this.carouselImgs.push(res.data[0].imgsrc);
        }
        this.goods = res.data[0];
      }).catch((err) => {
        window.console.log(err)
        
      });
    }
  },
  created(){
    window.console.log('detial->created');
  },
  mounted(){
    window.console.log('detial->mounted');
    this.pramsId = this.$route.query.id;
    this.getGoods();
  },
  
}
</script>

<style scoped>
.detail-carousel{
  max-height: 300px;
  overflow: hidden;
}
.goods-msg{
  background-color: #dcdcdc;
}
.goods-tit{
  width: 100%;
  height: 50px;
  background-color: #fff;
  line-height: 24px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 3px 5px;
}
#prams-price{
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  color: #fff;
  background-color: #d81e06;
}
</style>
