<template>
  <div class="backtop">
    <img src="../../../assets/images/backtop/backtop.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backtop',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.backtop{
  position: fixed;
  bottom: 50px;
  right: 3px;
}
.backtop>img{
  height: 50px;
  width: auto;
}
</style>
