<template>
  <div class="result">
    <div class="res-bar">
      <span @click="$router.go(-1)">返回</span>
    </div>
    模糊查询
  </div>
</template>

<script>
export default {
  name: 'result',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.result{
  width: 100%;
  height: 100%;
}
.res-bar{
  height: 40px;
  background-color: #F8F8FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
