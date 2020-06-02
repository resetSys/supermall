<template>
  <div class="toast" v-show="isShow">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      msg:"",
      isShow:false
    }
  },
  methods:{
    show(message,time){
      this.msg = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false
        this.msg = "";
      }, time);
    }
  }
}
</script>

<style scoped>
.toast{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
  width: auto;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  line-height: 40px;
  text-align: center;
}
</style>
