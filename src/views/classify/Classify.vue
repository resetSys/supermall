<template>
  <div class="warpper">
    <nav-bar>
      <span slot="center">分类</span>
    </nav-bar>
    <div class="container">
      <div class="con-nav">
        <ul>
          <li v-for="(item,index) in navList" :class="{'con-nav-active':index==currNav}"
            @click="handleNav(index,item.id)" :key="index">{{item.title}}</li>
        </ul>
      </div>
      <div class="con-list">
        <div class="con-list-container">
          <div class="con-li-it">
            <p class="CLI-tit">猜你喜欢</p>
            <div class="CLI-item">
              <div class="CLI-it-it" v-for="(item,index) in classList" :key="index">
                <img :src="item.imgsrc" :alt="item.title">
                <p>{{item.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//组件
import BScroll from "better-scroll";
import navBar from "components/common/navbar/NavBar";
//网络
import {request} from "@/network/request";
export default {
  name: 'classify',
  data() {
    return {
      bs:null,
      currNav:0,//记录当前nav
      navList:[],//存储分类
      classList:[],//存储分类下数据
    }
  },
  components: {
    navBar,
  },
  mounted(){
    new BScroll(".con-nav",{
      //参数选型，可添加参数
      probeType:2
    });
    // bscroll.on("scroll",(position)=>{
    //   window.console.log(position);
    // });
    new BScroll(".con-list",{
      //参数选型，可添加参数
      probeType:2
    });
    this.getNav();//获取分类
    this.getClassList(1);//获取分类下的数据
  },
  methods:{
    /**点击nav */
    handleNav(index,id){
      this.currNav = index;
      this.getClassList(id);
    },
    /**获取一级导航 */
    getNav(){
      request({
        url:"/get_classify.php",
        method:"get",
      }).then((res) => {
        window.console.log(res);
        this.navList = res.data;
      }).catch((err) => {
        window.console.log(err);
      });
    },
    /**获取分类下的数据 */
    getClassList(id){
      request({
        url:"/get_classList.php",
        method:"post",
        data:{
          id:id
        }
      }).then((res) => {
        window.console.log(res);
        this.classList = res.data;
      }).catch((err) => {
        window.console.log(err);
      });
    },
  },

}
</script>

<style scoped>
.warpper{
  width: 100%;
}
.container{
  width: 100%;
  height: calc(100vh - 96px);
  background-color: #dcdcdc;
  overflow: hidden;
  display: flex;
}
.con-nav{
  width: 25%;
  background-color: #fff;
  overflow: hidden;
}
.con-nav>ul>li{
  text-align: center;
  padding: 10px 2px;
  box-sizing: border-box;
  
}
.con-nav-active{
  color: #d81e06;
  background-color: #dcdcdc;
}
/* 分类具体项 */
.con-list{
  width: 75%;
  background-color: #dcdcdc;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
}
.CLI-tit{
  padding: 3px 0;
}
.CLI-item{
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.CLI-it-it{
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.CLI-it-it>img{
  height: 40px;
}
.CLI-it-it>p{
  font-size: 12px;
}
</style>
