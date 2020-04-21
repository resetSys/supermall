<template>
  <div id="home">
    <nav-bar>
      <span slot="center">首页</span>
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
      <goods-list :goods="goods[currList].list"/>
      测试清除浮动
    </scroll>
    <backtop @click.native="backtop" v-show="isShow"/>
  </div>
</template>

<script>
import recommend from "./child/recommend"

import navBar from "components/common/navbar/NavBar"
import carousel from "components/common/carousel/Carousel"
import tabControl from "components/common/tabControl/TabControl"
import goodsList from "components/common/goodsList/GooodsList"
import Scroll from "components/common/scroll/Scroll"
import Backtop from "components/common/backTop/Backtop"

import {getHomeData,getHomeGoods} from "../../network/home"
import {debounce} from "components/content/untils"


export default {
  name: 'home',
  data() {
    return {
      homeData:null,
      carouselMsg:"这是轮播组件的内容",
      titles:['流行','新款','精选'],
      goods:{
        pop:{
          page:0,
          list:[
            {
              img:"https://img11.360buyimg.com/n7/jfs/t1/90236/8/10799/195980/5e2491d6Ef86ac0b6/0a5ae626e9364df2.jpg",
              title:"【张嘉倪同款】红袖毛呢大衣2019冬季新款女装小香风多穿领双面呢大衣外套90219400805 橘粉110 S",
              price:1159,
              id:1
            },{
              img:"https://img10.360buyimg.com/n7/jfs/t1/97995/22/10820/176055/5e21e4cbEc6108da0/d397a1513dd880af.jpg",
              title:"年前ZUI后一波活动，过年不打烊！1月18号-1月31号，全场2件9折，3件8.5折，每满300再减50元（1000元封顶）",
              price:249,
              id:2
            },{
              img:"https://img11.360buyimg.com/n7/jfs/t1/94610/15/11153/182436/5e280235Efe999dd4/283a0a4dc6e6fcf2.jpg",
              title:"【春装新品】鹿歌2020春装新款单排扣衬衫式外套简约气质纯色修身长款中风衣女春季新品 香脂绿 L/165",
              price:389,
              id:3
            },{
              img:"https://img10.360buyimg.com/n7/jfs/t1/64545/2/15994/282533/5dd78ae3Ee8d043d7/2b288a67230f7c67.jpg",
              title:"1.17-2.2过年不打烊，领券满599减50，1月31日恢复正常发货，喜欢就立即抢购哦~查看更多",
              price:369,
              id:4
            },
            {
              img:"https://img13.360buyimg.com/n7/jfs/t1/103544/34/11084/218009/5e2871e0E5c33844b/05a93216c4c40893.jpg",
              title:"betu百图毛毛V领毛衣外套女秋装新款2019宽松慵懒风甜美减龄针织开衫1909T26 白色 M",
              price:399,
              id:5
            },{
              img:"https://img12.360buyimg.com/n7/jfs/t1/106769/30/4021/144277/5de49fb1E05f41283/c1c9746d746e77b7.jpg",
              title:"琼斯维格JONAS WAGEL女冬装新款麂皮绒复合仿兔毛外套 黑色 S",
              price:199,
              id:6
            },{
              img:"https://img14.360buyimg.com/n7/jfs/t1/105387/12/11066/395133/5e305aaaE8b721b21/5b1ad1528f26d7f7.jpg",
              title:"梵希蔓千鸟格毛呢西服女秋冬2019新款长袖百搭加厚法式小西装外套 30226 粉千鸟格 M",
              price:479,
              id:7
            },{
              img:"https://img12.360buyimg.com/n7/jfs/t1/98343/6/10949/227930/5e21f24cE11e91a09/379a9182954cd7f3.jpg",
              title:"olrain欧芮儿2019年冬装新品女装紫色毛领连帽大毛领羽绒服女中长款白鸭绒加厚外套 紫色 M",
              price:713,
              id:8
            },{
              img:"https://img14.360buyimg.com/n7/jfs/t1/45953/4/14648/137315/5dbabf5cEef6d74fb/b0cd5600e3f10d18.jpg",
              title:"下单赠送运费险，支持7天无理由退换",
              price:149,
              id:9
            },{
              img:"https://img14.360buyimg.com/n7/jfs/t1/102893/28/10021/186711/5e14512cEe156407f/fe94c9c818cec0a3.jpg",
              title:"BAYMAY半身裙女新品2020春季韩版开衩性感包臀裙子 黑色 M",
              price:149,
              id:10
            },{
              img:"https://img10.360buyimg.com/n7/jfs/t1/83081/24/7061/159893/5d5236d6Ed7b9fea5/5c01951f89efa492.jpg",
              title:"皮皮狗 2019年秋冬新品 圆领移针散摆连衣裙 673豆沙绿 S/95",
              price:159,
              id:11
            },{
              img:"https://img13.360buyimg.com/n7/jfs/t1/91203/7/11076/193032/5e29be32E8cc4280a/4a5464b9f913b9df.jpg",
              title:"【2.1新春开门红】0-2点限时抢5件6折叠100元券，实付低至5.2折！清仓区2件5折，更有春新品1件即享7折，点击查看领券提前加购",
              price:268,
              id:12
            },
          ]
        },
        new:{
          page:0,
          list:[
            {
              img:"https://img13.360buyimg.com/n7/jfs/t1/103544/34/11084/218009/5e2871e0E5c33844b/05a93216c4c40893.jpg",
              title:"betu百图毛毛V领毛衣外套女秋装新款2019宽松慵懒风甜美减龄针织开衫1909T26 白色 M",
              price:399,
              id:13
            },{
              img:"https://img12.360buyimg.com/n7/jfs/t1/106769/30/4021/144277/5de49fb1E05f41283/c1c9746d746e77b7.jpg",
              title:"琼斯维格JONAS WAGEL女冬装新款麂皮绒复合仿兔毛外套 黑色 S",
              price:199,
              id:14
            },{
              img:"https://img14.360buyimg.com/n7/jfs/t1/105387/12/11066/395133/5e305aaaE8b721b21/5b1ad1528f26d7f7.jpg",
              title:"梵希蔓千鸟格毛呢西服女秋冬2019新款长袖百搭加厚法式小西装外套 30226 粉千鸟格 M",
              price:479,
              id:15
            },{
              img:"https://img12.360buyimg.com/n7/jfs/t1/98343/6/10949/227930/5e21f24cE11e91a09/379a9182954cd7f3.jpg",
              title:"olrain欧芮儿2019年冬装新品女装紫色毛领连帽大毛领羽绒服女中长款白鸭绒加厚外套 紫色 M",
              price:713,
              id:16
            },
          ]
        },
        sell:{
          page:0,
          list:[
            {
              img:"https://img14.360buyimg.com/n7/jfs/t1/45953/4/14648/137315/5dbabf5cEef6d74fb/b0cd5600e3f10d18.jpg",
              title:"下单赠送运费险，支持7天无理由退换",
              price:149,
              id:17
            },{
              img:"https://img14.360buyimg.com/n7/jfs/t1/102893/28/10021/186711/5e14512cEe156407f/fe94c9c818cec0a3.jpg",
              title:"BAYMAY半身裙女新品2020春季韩版开衩性感包臀裙子 黑色 M",
              price:149,
              id:18
            },{
              img:"https://img10.360buyimg.com/n7/jfs/t1/83081/24/7061/159893/5d5236d6Ed7b9fea5/5c01951f89efa492.jpg",
              title:"皮皮狗 2019年秋冬新品 圆领移针散摆连衣裙 673豆沙绿 S/95",
              price:159,
              id:19
            },{
              img:"https://img13.360buyimg.com/n7/jfs/t1/91203/7/11076/193032/5e29be32E8cc4280a/4a5464b9f913b9df.jpg",
              title:"【2.1新春开门红】0-2点限时抢5件6折叠100元券，实付低至5.2折！清仓区2件5折，更有春新品1件即享7折，点击查看领券提前加购",
              price:268,
              id:20
            },
          ]
        }
      },
      currList:'pop',
      probeType:3,
      isShow:false,
      tabControlShow:false,
      tabControlOffsetTop:0,
      saveScroll:0,
      carouselImgs:['https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
        'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg']
    }
  },
  components: {
    navBar,
    carousel,
    recommend,
    tabControl,
    goodsList,
    Scroll,
    Backtop
  },
  created(){
    //将具体逻辑代码封装在methods中
    window.console.log("created")
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
      switch (index) {
        case 0:
          this.currList = 'pop'
          break;
        case 1:
          this.currList = 'new'
          break;
        case 2:
          this.currList = 'sell'
          break;
        default:
          break;
      }
      this.$refs.tabControl.currIndex = index;
      this.$refs.tabControl2.currIndex = index;
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
    pullingUp(){
      window.console.log("上拉加载更多")
      // window.console.log(this.goods[this.currList].list)
      this.goods[this.currList].list.push({
              img:"https://img14.360buyimg.com/n7/jfs/t1/45953/4/14648/137315/5dbabf5cEef6d74fb/b0cd5600e3f10d18.jpg",
              title:"下单赠送运费险，支持7天无理由退换",
              price:149
            },{
              img:"https://img14.360buyimg.com/n7/jfs/t1/102893/28/10021/186711/5e14512cEe156407f/fe94c9c818cec0a3.jpg",
              title:"BAYMAY半身裙女新品2020春季韩版开衩性感包臀裙子 黑色 M",
              price:149
            },{
              img:"https://img10.360buyimg.com/n7/jfs/t1/83081/24/7061/159893/5d5236d6Ed7b9fea5/5c01951f89efa492.jpg",
              title:"皮皮狗 2019年秋冬新品 圆领移针散摆连衣裙 673豆沙绿 S/95",
              price:159
            },{
              img:"https://img13.360buyimg.com/n7/jfs/t1/91203/7/11076/193032/5e29be32E8cc4280a/4a5464b9f913b9df.jpg",
              title:"【2.1新春开门红】0-2点限时抢5件6折叠100元券，实付低至5.2折！清仓区2件5折，更有春新品1件即享7折，点击查看领券提前加购",
              price:268
            })
      this.$refs.scroll.bscroll.finishPullUp();//上拉后如果不加此行代码将不会再触发
    },
    //监听轮播图图片加载完成
    carouselLoad(){
      //计算出tab-control的offset
      // window.console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop-39;
    },
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
