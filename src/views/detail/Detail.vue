<template>
  <div class="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar @detialTitle="detialTitle"/>
    <!-- 轮播图 -->
    <carousel class="detail-carousel" :carouselImgs="carouselImgs"/>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
import detailNavBar from "./child/DetailNavBar"
import carousel from "components/common/carousel/Carousel"
import detailBottomBar from "./child/DetailBottomBar"

export default {
  name: 'detail',
  data() {
    return {
      carouselImgs:['//img11.360buyimg.com/n1/s350x449_jfs/t1/100688/38/11453/183794/5e3454c6E9805f1df/39a6dea3208d93e6.jpg!cc_350x449.jpg',
        '//img11.360buyimg.com/n1/s350x449_jfs/t1/88838/34/1571/273503/5dc105fdE077a4ae2/0e3fafbe1c8d44e4.jpg!cc_350x449.jpg',
        '//img11.360buyimg.com/n1/s350x449_jfs/t1/82254/28/14484/116296/5dc105ffEcc00d284/ad4142b44fd0e920.jpg!cc_350x449.jpg']
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
      window.console.log("添加到购物车")
    }
  },
}
</script>

<style scoped>
.detail-carousel{
  max-height: 300px;
  overflow: hidden;
}
</style>
