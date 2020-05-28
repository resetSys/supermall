<template>
  <div class="MCC-item">
    <div class="MCC-it-tit">
      <slot name="title">
        <p>会员中心</p>
      </slot>
      <slot name="des">
        <p>吃喝玩乐中心</p>
      </slot>
    </div>
    <slot name="img">
      <img src="../../../assets/images/profile/profile.png" alt="会员中心">
    </slot>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.MCC-item{
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
}
.MCC-it-tit{
  display: flex;
  font-size: 12px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.MCC-it-tit>p{
  text-align: center;
}
.MCC-it-tit>p:last-of-type{
  color: #ff9c00;
}
.MCC-item>img{
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
