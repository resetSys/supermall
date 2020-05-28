<template>
  <div class="search-bar">
    <input class="search-inp" type="text" placeholder="要搜索的数据">
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.search-bar{
  width: 100%;
  height: 40px;
  background: #d81e06;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.search-inp{
  outline: none;
  border: none;
  padding: 3px 5px;
  border-radius: 10px;
  width: 80%;
}

</style>
