<template>
  <div class="carousel">
    <ul>
      <li v-for="(item,index) in carouselImgs" :key="index">
        <img :src="item" alt="" @load="carouselLoad">
      </li>
    </ul>
    <!-- 小圆点 -->
    <div class="carouse-dot">
      <span v-for="(item,index) in carouselImgs" :key="index"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props:{
    carouselImgs:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data() {
    return {
      timer:null,
      isLoad:false,
    }
  },
  methods:{
    //监听图片是否加载完成
    carouselLoad(){
      this.$emit("carouselLoad")
    }
  },
  mounted(){
    //获取屏幕的宽度赋值给img
    let w = document.documentElement.clientWidth || document.body.clientWidth;
    //获取所有的图片
    const imgs = document.querySelectorAll(".carousel>ul>li>img")
    for(let i = 0;i < imgs.length;i++){
      imgs[i].style.width = w+"px";
    }
    //获取ul
    const ul = document.querySelector(".carousel>ul")
    //给ul宽度赋值
    ul.style.width = w * imgs.length +"px";
    //获取dot
    const dots = document.querySelectorAll(".carouse-dot>span")
    for (let i = 0; i < dots.length; i++) {
      dots[i].index = i;
    }

    
    //设置ul的偏移改变dots状态
    let index = 0;
    changeImg.call(this);
    this.timer=setInterval(() => {
      changeImg(this)
    }, 3000);
    function changeImg(){
      if (index>imgs.length-1) {
        index = 0;
      }
      for(let i=0;i<dots.length;i++){
        dots[i].style.backgroundColor = "#fff"
      }
      ul.style.marginLeft = -w*index + "px";
      dots[index].style.backgroundColor = "#d81e06";
      index++;
    }
    //给圆点添加绑定事件
    for (let i = 0; i < dots.length; i++) {
      dots[i].onclick=(event =>{
        index = event.target.index;
        changeImg.call(this);
        //清除定时器
        clearInterval(this.timer)
        //开启一个新的定时器
        this.timer=setInterval(() => {
          changeImg(this)
        }, 3000);
      })
    }
  },
  beforeDestroy(){
    //清除定时器
    clearInterval(this.timer);
  }

}
</script>

<style scoped>

.carousel{
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}
/* ul的宽度等于li*屏幕的宽度 */
.carousel>ul{
  height: auto;
  *zoom: 1;
  transition: margin-left .3s;
}
.carousel>ul::after{
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.carousel>ul>li{
  float: left;
}
.carousel>ul>li>img{
  height: auto;
}

.carouse-dot{
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 20px;
  text-align: center;
}
.carouse-dot>span{
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 5px;
  background: #ffffff;
}
.carouse-dot>span:first-of-type{
  background-color: var(--base-color);
}
</style>
