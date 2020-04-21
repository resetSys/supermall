<template>
  <div id="tabbar-item" @click="itemClick">
    <div v-if="!isActive" class="tabbar-item-img"><slot name="tabbar-img"></slot></div>
    <div v-else class="tabbar-item-img-active"><slot name="tabbar-img-active"></slot></div>
    <div :class="{'active':isActive,'tabbar-item-text':true}"><slot name="tabbar-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  data() {
    return {
      
    }
  },
  props:{
    path:String
  },
  components: {

  },
  computed:{
    isActive(){
      return this.$route.path === this.path;
    }
  },
  methods:{
    itemClick(){
      //修改router的页面
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
#tabbar-item{
  width: 100%;
  height: 100%;
  text-align: center
}
.tabbar-item-text{
  font-size: 14px;
}
.tabbar-item-img,.tabbar-item-img-active{
  height: 25px;
  margin-top:5px; 
}
.tabbar-item-img>img,.tabbar-item-img-active>img{
  height: 25px;
  width: auto;
  display: inline-block;
}
.active{
  color: var(--base-color);
}
</style>
