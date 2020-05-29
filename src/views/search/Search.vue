<template>
  <div id="search">
    <!-- 搜索框 -->
    <se-bar></se-bar>
    <!-- 历史记录 -->
    <div class="se-record">
      <div class="se-re-tit">
        <span>历史记录</span>
        <span class="se-re-tit-clear" @click="clearStroage"></span>
      </div>
      <div class="se-re-con">
        <span v-for="(item,index) in records" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
//组件
import seBar from "./child/scBar";
export default {
  name: 'search',
  data() {
    return {
      records:[]//搜索记录
    }
  },
  components: {
    seBar
  },
  /**获取localStorage */
  created(){
    if (localStorage.getItem('record') != null) {
      let records = localStorage.getItem('record').split(',');
      this.records = records.reverse();
    }
  },
  methods:{
    /**删除记录 */
    clearStroage(){
      this.records = [];
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
#search{
  width: 100%;
  height: 100%;
}
.se-record{
  width: 100%;
  height: auto;
}
.se-re-tit{
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 600;
}
.se-re-tit-clear{
  display:inline-block;
  width:25px;
  height:25px;
  background: url("../../assets/images/search/clear.png") no-repeat center;
  background-size: 80% 80%;
}
.se-re-con{
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.se-re-con>span{
  display: inline-block;
  font-size: 13px;
  background-color: #F8F8FF;
  margin: 3px 5px;
  border-radius: 15px;
  padding: 3px 5px;
  color: #909399;
}
</style>
