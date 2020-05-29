<template>
  <div id="profile">
    <nav-bar>
      <span slot="center">我的</span>
    </nav-bar>
    <div id="pro-main">
      <div id="ma-con">
        <div id="man-con-pro">
          <img src="~assets/images/profile/profile.png" alt="头像">
          <div id="MCP-login">
            点击登录
          </div>
        </div>
        <div id="man-con-card">
          <card>
            <p slot="title">会员中心</p>
            <p slot="des">领吃喝玩乐特权</p>
            <img src="~assets/images/profile/redPacket.png" slot="img" alt="会员中心">
          </card>
          <card>
            <p slot="title">天猫积分</p>
            <p slot="des">兑专享话费券</p>
            <img src="~assets/images/profile/jinbi.png" slot="img" alt="会员中心">
          </card>
          <card>
            <p slot="title">红包省钱卡</p>
            <p slot="des">领95元红包</p>
            <img src="~assets/images/profile/redPacket2.png" slot="img" alt="会员中心">
          </card>
          <card>
            <p slot="title">红包签到</p>
            <p slot="des">红包钱包活动</p>
            <img src="~assets/images/profile/redPacket3.png" slot="img" alt="会员中心">
          </card>
        </div>
        <div id="man-con-form">
          <p id="MCF-tit">我的订单</p>
          <div id="MCF-con">
            <div class="MCF-con-item">
              <img src="../../assets/images/profile/fukuan.png" alt="待付款">
              <span>待付款</span>
            </div>
            <div class="MCF-con-item">
              <img src="../../assets/images/profile/fahuo.png" alt="待发货">
              <span>待发货</span>
            </div>
            <div class="MCF-con-item">
              <img src="../../assets/images/profile/shouhuo.png" alt="待收货">
              <span>待收货</span>
            </div>
            <div class="MCF-con-item">
              <img src="../../assets/images/profile/pingjia.png" alt="待评价">
              <span>待评价</span>
            </div>
            <div class="MCF-con-item">
              <img src="../../assets/images/profile/shouhou.png" alt="售后/退货">
              <span>待评价</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//组件
import navBar from "components/common/navbar/NavBar";
import BScroll from "better-scroll";
import Card from "./children/Card";

export default {
  name: 'profile',
  data() {
    return {

    }
  },
  components: {
    navBar,
    Card
  },
  mounted(){
    new BScroll('#pro-main',{
      probeType:2
    })
  }
}
</script>

<style scoped>
#profile{
  height: 100%;
}
#pro-main{
  height: calc(100% - 100px);
  width: 100%;
  overflow: hidden;
  background-color: #F8F8FF;

}

/* 头像 */
#man-con-pro{
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#man-con-pro>img{
  width: 50px;
  height: 50px;
  margin: 0 20px;
}
/* 卡包 */
#man-con-card{
  width: 95%;
  height: 100px;
  margin: 10px auto 0;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

/* 订单 */
#man-con-form{
  width: 95%;
  height: 80px;
  margin: 10px auto 0;
  border-radius: 5px;
  background-color: #fff;
}
#MCF-tit{
  border-bottom: 0.5px solid #dcdcdc;
  font-size: 13px;
  padding: 2px 5px;
  box-sizing: border-box;
}
#MCF-con{
  display: flex;
  height: 60px;
  width: 100%;
}
.MCF-con-item{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MCF-con-item>img{
  height: 30px;
  width: 30px;
}
.MCF-con-item>span{
  font-size: 12px;
}

</style>
