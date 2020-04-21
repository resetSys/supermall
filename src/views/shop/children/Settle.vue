<template>
  <div class="settle">
    <div class="left">
      <span @click="toggleCheckAll">
        <img v-show="isSelected" src="~assets/images/goodsList/checked.png" alt="">
      </span>&nbsp;全选
    </div>
    <div class="rigth">
      合计:￥{{sum}}&nbsp;<button @click="closeAcc">结算</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import { mapMutations } from 'vuex'
export default {
  name: '',
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      "sum",
      "isSelected"
    ])
  },
  methods:{
    ...mapMutations([
      'toggleCheckAll'
    ]),
    closeAcc(){
      this.$toast.methods.show("结算商品",2000)
      window.console.log("结算")
    }
  }
}
</script>

<style scoped>
.settle{
  position: relative;
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  border-top: .5px solid #dcdcdc;
  background-color: #ffffff;
}
.left,.right{
  flex-grow: 1;
}
.left>span{
  height: 20px;
  width: 20px;
  line-height: 0;
  vertical-align: sub;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  border: .5px solid #d81e06;
}
.left>span>img{
  width: 100%;
  height: 100%;
}
.rigth{
  text-align: right;
  color: var(--base-color);
  font-size: 16px;
}
.rigth>button{
  padding: 5px 10px;
}
</style>
