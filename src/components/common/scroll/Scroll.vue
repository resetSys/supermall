<template>
  <div class="wrapper" ref="warpper">
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: 'scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      bscroll:null,
    }
  },
  components: {

  },
  mounted(){
    this.bscroll=new BScroll(this.$refs.warpper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    //监听滚动的位置
    this.bscroll.on('scroll',(position)=>{
      this.$emit('scrollPosition',position)
    });
    //监听上拉刷新
    this.bscroll.on('pullingUp',()=>{
      this.$emit("pullingUp")
    });
  },
  methods:{
    refresh(){
      this.bscroll && this.bscroll.refresh();
    }
  },
}
</script>

<style scoped>
</style>
