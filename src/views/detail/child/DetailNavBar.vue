<template>
  <div class="detailNavBar">
    <span class="back" @click="back"><img src="~assets/images/detail/back.png" alt=""></span>
    <div class="tabber">
      <div class="tabber-item" v-for="(item,index) in list" :key="index"
        @click="titleClick(index)">
        <span :class="{active:currIndex == index}">{{item}}</span>
      </div>
    </div>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'detailNavBar',
  data() {
    return {
      currIndex:0,
      list:['商品','参数','评论','推荐']
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    titleClick(index){
      this.currIndex = index;
      this.$emit("detialTitle",index);
    },
  }
}
</script>

<style scoped>
.detailNavBar{
  height: 44px;
  width: 100%;
  display: flex;
  line-height: 44px;
  /* align-items: center; */
  box-shadow: 0 2px 2px #dcdcdc;
  background-color: #ffffff;
}
.detailNavBar>span{
  display: inline-block;
  width: 60px;
  height: 100%;
  text-align: center;
}
.back>img{
  height: 24px;
  width: auto;
  margin-top: 10px;
}
.tabber{
  flex-grow: 1;
  text-align: center;
  display: flex;
}
.tabber-item{
  flex-grow: 1;
}
.tabber>span{
  display: inline-block;
  padding: 2px;
  font-size: 14px;
}
.active{
  color: var(--base-color);
}
</style>
