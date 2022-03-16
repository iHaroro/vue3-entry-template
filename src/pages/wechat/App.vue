<template>
  <div class="page-content">
    PAGE：WECHAT
    <a-component />
  </div>
</template>
<script>
import AComponent from '@/pages/demo/components/DemoComponent'

export default {
  components: {
    AComponent,
  },
  setup () {
    const fn = () => console.log('fn running')
    return { fn }
  },
}
</script>
<style lang="less" scoped>
.page-content {
  .title {
    background: #3ca877;

  }

  .sub-title {
    background: #FFC527;
  }
}
</style>
