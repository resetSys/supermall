import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartData:[
      {
        img:"https://img11.360buyimg.com/n7/jfs/t1/90236/8/10799/195980/5e2491d6Ef86ac0b6/0a5ae626e9364df2.jpg",
        title:"【张嘉倪同款】红袖毛呢大衣2019冬季新款女装小香风多穿领双面呢大衣外套90219400805 橘粉110 S",
        price:1159,
        id:1,
        check:true,
        num:1
      },{
        img:"https://img10.360buyimg.com/n7/jfs/t1/97995/22/10820/176055/5e21e4cbEc6108da0/d397a1513dd880af.jpg",
        title:"年前ZUI后一波活动，过年不打烊！1月18号-1月31号，全场2件9折，3件8.5折，每满300再减50元（1000元封顶）",
        price:249,
        id:2,
        check:true,
        num:1
      },{
        img:"https://img11.360buyimg.com/n7/jfs/t1/94610/15/11153/182436/5e280235Efe999dd4/283a0a4dc6e6fcf2.jpg",
        title:"【春装新品】鹿歌2020春装新款单排扣衬衫式外套简约气质纯色修身长款中风衣女春季新品 香脂绿 L/165",
        price:389,
        id:3,
        check:true,
        num:1
      },
    ]
  },
  getters:{
    sum(state){
      let all=0;
      for(let i = 0;i < state.cartData.length;i++){
        if (state.cartData[i].check) {
          all += state.cartData[i].num*state.cartData[i].price
        }
      }
      return all;
    },
    isSelected(state){
      if(state.cartData.length === 0) return false;
      //判断全选,查询有没有为false的
      return !state.cartData.find((item) => !item.check);
    }
  },
  mutations:{
    toggleCheck(state,index){
      // window.console.log("荷载内容"+index)
      state.cartData[index].check = !state.cartData[index].check
    },
    add(state,index){
      state.cartData[index].num++
    },
    reduce(state,index){
      if (state.cartData[index].num > 1) {
        state.cartData[index].num--
      }
    },
    toggleCheckAll(state){
      if(this.getters.isSelected){
        for (let i = 0; i < state.cartData.length; i++) {
          state.cartData[i].check = false;
        }
      }else{
        for (let i = 0; i < state.cartData.length; i++) {
          state.cartData[i].check = true;
        }
      }
        window.console.log(!this.getters.isSelected)
    },
  }
})

export default store