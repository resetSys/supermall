<template>
  <div class="recommend">
    <div class="reco-item">
      <img src="~assets/images/home/recommend/r1.jpg" alt="">
      <p>推荐1</p>
    </div>
    <div class="reco-item">
      <img src="~assets/images/home/recommend/r2.jpg" alt="">
      <p>推荐2</p>
    </div>
    <div class="reco-item">
      <img src="~assets/images/home/recommend/r3.jpg" alt="">
      <p>推荐3</p>
    </div>
    <div class="reco-item">
      <img src="~assets/images/home/recommend/r4.jpg" alt="">
      <p>推荐4</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  padding: 10px 0 20px;
  box-shadow:0 2px 8px #dcdcdc; 
}
.reco-item{
  flex-grow:1; 
  text-align: center;
}
.reco-item>img{
  height: 80px;
  width: auto;
  border-radius: 40px;
}
.reco-item>p{
  text-align: center;
}
</style>
