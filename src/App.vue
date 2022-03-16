<template>
  <div class="page-content">
    <div>
      <h1 class="title">Vue3</h1>
      <h2 class="sub-title">entry-template</h2>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    const fn = () => console.log('fn running')
    return { fn }
  },
}
</script>
<style lang="less" scoped>
.page-content {
  background: #282c34;

  .title {
    background: #3ca877;

    .sub-title {
      background: #FFC527;
    }
  }
}
</style>
