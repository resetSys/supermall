<template>
  <div id="tabbar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
#tabbar{
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 -2px 6px #dcdcdc;
}
</style>
