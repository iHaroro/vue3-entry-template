<template>
  <div class="page-content">
    <p class="title">PAGE：DEMO</p>
    <a-component />
    <b-component />
    <div class="safe-box"></div>
    PAGE CONTENT
  </div>
</template>
<script>
import AComponent from '@/pages/demo/components/DemoComponent'
import BComponent from '@/pages/demo/components/DemoBComponent'

export default {
  components: {
    AComponent,
    BComponent,
  },
  setup () {
    const fn = () => console.log('fn running')
    return { fn }
  },
}
</script>
<style lang="less" scoped>
.page-content {
  width: 750px;
  height: 750px;
  .setColor(@primary-color);

  .title {
    background: #27b07a;
  }
}
</style>
