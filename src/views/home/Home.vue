<template>
  <div id="home">
    <nav-bar>
      <img src="~assets/images/navbr/scan.png" alt="扫一扫" slot="left">
      <span slot="center">首页</span>
      <img src="~assets/images/navbr/search.png" alt="搜索" slot="right">
    </nav-bar>
    <tab-control class="fixed" ref="tabControl2" :titles="titles" @tabClick="tabClick"
      v-show="tabControlShow"/>
    <scroll ref="scroll" 
      :probeType="probeType"
      :pullUpLoad="true"
      @scrollPosition="scrollPosition"
      @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <carousel @carouselLoad="carouselLoad" :carouselImgs="carouselImgs"/>
      <!-- 推荐内容 -->
      <recommend/>
      <br>
      <!-- 选项卡 -->
      <tab-control ref="tabControl" :titles="titles" @tabClick="tabClick"/>
      <!-- 选项卡内容展示 -->
      <goods-list :goods="goods"/>
    </scroll>
    <backtop @click.native="backtop" v-show="isShow"/>
  </div>
</template>

<script>
import recommend from "./child/recommend"
//组件
import navBar from "components/common/navbar/NavBar"
import carousel from "components/common/carousel/Carousel"
import tabControl from "components/common/tabControl/TabControl"
import goodsList from "components/common/goodsList/GooodsList"
import Scroll from "components/common/scroll/Scroll"
import Backtop from "components/common/backTop/Backtop"
// import SearchBar from "components/common/search/SearchBar";

import {getHomeData,getHomeGoods} from "../../network/home"
import {debounce} from "components/content/untils"
import {request} from "@/network/request"



export default {
  name: 'home',
  data() {
    return {
      homeData:null,
      carouselMsg:"这是轮播组件的内容",
      titles:['流行','新款','精选'],
      goods:[],
      classify:1,//分类标识
      currPage:1,//要请求的页数
      records:1,//记录当前分类总页数
      probeType:3,
      isShow:false,
      tabControlShow:false,
      tabControlOffsetTop:0,
      saveScroll:0,
      carouselImgs:[],//轮播图数据
    }
  },
  components: {
    navBar,
    carousel,
    recommend,
    tabControl,
    goodsList,
    Scroll,
    Backtop,
    // SearchBar
  },
  created(){
    //将具体逻辑代码封装在methods中
    // window.console.log("created")
    // this.getHomeData.call(this);
    // this.getHomeGoods.call(this);
    
  },
  mounted(){
    //监听事件总线
    //better-scroll refesh()
    const refresh = debounce(this.$refs.scroll.refresh,200);
    this.$bus.$on("imgLoaded",() =>{
      refresh();
    });

    this.getCoursel();//获取轮播图
    this.getGoods();//获取商品
  },
  activated(){
    // window.console.log("Home activated")
    this.$refs.scroll.bscroll.scrollTo(0,this.saveScroll,0);
    // this.$refs.scroll.refresh();
  },
  deactivated(){
    // window.console.log("Home deactivated")
    //销毁前记录scroll的位置
    this.saveScroll = this.$refs.scroll.bscroll.y;
    // window.console.log(this.saveScroll)
  },
  methods:{
    getHomeData(){
      getHomeData().then(res => {
        window.console.log("getHomeData"+res);
      }).catch(e => {
        window.console.log(e)
      })
    },
    getHomeGoods(){
      getHomeGoods().then(res => {
        window.console.log("getHomeGoods"+res)
      }).catch(e => {
        window.console.log(e)
      })
    },
    tabClick(index){
      this.currPage = 1;//切换分类将当前页重置
      this.goods = [];//清空
      switch (index) {
        case 0:
          this.classify = 1
          break;
        case 1:
          this.classify = 2
          break;
        case 2:
          this.classify = 3
          break;
        default:
          break;
      }
      //将两个tabControl同步
      this.$refs.tabControl.currIndex = index;
      this.$refs.tabControl2.currIndex = index;
      this.getGoods();
    },
    backtop(){
      this.$refs.scroll.bscroll.scrollTo(0,0,300)
    },
    scrollPosition(position){
      this.isShow = position.y < -500;
      if (-position.y>this.tabControlOffsetTop) {
        this.tabControlShow = true;
      }else{
        this.tabControlShow = false;
      }
    },
    /**上拉加载更多 */
    pullingUp(){
      // window.console.log("上拉加载更多")
      //请求该分类更多的数据
      this.currPage++;
      // window.console.log(this.currPage);
      if (this.currPage<=this.records) {
        // window.console.log('上拉加载更多');
        this.getGoods();
      }
      this.$refs.scroll.bscroll.finishPullUp();//上拉后如果不加此行代码将不会再触发
    },
    //监听轮播图图片加载完成
    carouselLoad(){
      //计算出tab-control的offset
      // window.console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop-39;
    },
    /**获取轮播图数据 */
    getCoursel(){
      request({
        url:"/get_carousel.php",
        method:"get"
      }).then((res) => {
        res.data.forEach(ele => {
          this.carouselImgs.push(ele.imgsrc);
        });
      }).catch((err) => {
        window.console.log(err);
      });
    },
    /**获取商品数据 */
    getGoods(){
      request({
        url:"/get_goods.php",
        method:"post",
        data:{
          page:this.currPage,
          classify:this.classify
        }
      }).then((res) => {
        this.records = res.data.records;
        res.data.arr.forEach(ele => {
          this.goods.push(ele);
        });
        // window.console.log(res);
      }).catch(() => {
        
      });
    }
  },
}


</script>

<style scoped>
/* .wrapper高度固定 -头部标题和底部tabbar*/
.wrapper{
  height: calc(100vh - 100px);
  overflow: hidden;
}
/* 给tab-control加上固定布局 */
.fixed{
  position: fixed;
  top: 43px;
  z-index: 5;
}
</style>
