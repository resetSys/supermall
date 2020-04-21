<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="rigth"><slot name="rigth"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.navbar{
  display: flex;
  height: 44px;
  background: var(--base-color);
  top: 0; 
  z-index: 2;
}
.left,.rigth{
  width: 60px;
}
.center{
  flex-grow: 1;
}
.left,.rigth,.center{
  text-align: center;
  line-height: 44px;
  height: 44px;
  color: #ffffff;
}
</style>
