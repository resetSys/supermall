<template>
  <div class="sc-bar">
    <span class="sc-bar-back" @click="back"></span>
    <input v-model="seValue" class="sc-bar-inp" type="text" placeholder="请输入要搜索的内容">
    <span class="sc-bar-btn" @click="handelSearch">
      <router-link @click="event.preventDefault()" to="/result">搜索</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      seValue:"",
    }
  },
 
  methods:{
    back(){
      this.$router.go(-1);
    },
    /**点击搜索 */
    handelSearch(){
      //执行跳转操作
      //将input输入框的值存入到浏览器中
      this.setStroage();
    },
    /**存入记录 */
    setStroage(){
      if (this.seValue == '') {
        return;
      }
      let record = localStorage.getItem('record');
      if (record != null) {
        localStorage.setItem('record',record+","+this.seValue);
        return;
      }
      localStorage.setItem('record',this.seValue);
    },
    
  },
  
}
</script>

<style scoped lang="less">
@theme-color:#d81e06;
.sc-bar{
  height: 40px;
  background-color: #F8F8FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.sc-bar-back{
  width: 30px;
  height: 30px;
  background-color: #fff;
  background: url("../../../assets/images/search/leftRow.png") no-repeat center;
  background-size: 80% 80%;
}
.sc-bar-inp{
  flex: 1;
  height: 25px;
  outline: none;
  border: 1px solid @theme-color;
  border-radius: 15px;
  padding: 0 5px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 0 10px;
}
.sc-bar-btn{
  height: 25px;
  width: 40px;
  background-color: #fff;
  font-size: 14px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEB422;
  color: #fff;
  box-shadow: 0 0 4px #dcdcdc;
  cursor: pointer;
}

</style>
