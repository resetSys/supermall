<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" 
      :class="{'active':currIndex == index,'tab-control-item':true}"
      @click="clickItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContral',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currIndex:0,
    }
  },
  components: {

  },
  methods:{
    clickItem(index){
      this.currIndex = index;
      this.$emit("tabClick",index);
    }
  },
}
</script>

<style scoped>
.tab-control{
  width: 100%;
  background-color: #ffffff;
  display: flex;
}
.tab-control-item{
  flex-grow: 1;
  text-align: center;
  padding: 5px;
}
.tab-control-item span{
  display: inline-block;
  padding: 5px; 
  transition: color .3s;
}
.active>span{
  color: var(--base-color);
  border-bottom:1px solid var(--base-color);
}
</style>
