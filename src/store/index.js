import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartData:[]
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
    addCart(state,payload){
      //判断是否有id重复的，Y num+1 N 新增
      let index = -1;
      for (let i = 0; i < state.cartData.length; i++) {
        if (state.cartData[i].id == payload.id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        state.cartData.push({
          img:payload.imgsrc,
          title:payload.title,
          price:payload.price,
          id:payload.id,
          check:true,num:1});
        window.console.log("没有该商品");
      } else {
        window.console.log("有该商品");
        state.cartData[index].num ++;
      }

    }
  }
})

export default store