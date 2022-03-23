<template>
  <div class="page-content">
    <p class="title">PAGE：DEMO</p>
    <a-component />
    <b-component />
    <div class="safe-box"></div>
    <p>PAGE CONTENT</p>
    <p>当前项目Vue3以前的Options API已被禁用，data中的name无法被定义：{{ name }}</p>
    <div @click="updateCount">click to update count: {{ count }}</div>
  </div>
</template>
<script>
import AComponent from './components/DemoComponent'
import BComponent from './components/DemoBComponent'
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

export default {
  components: {
    AComponent,
    BComponent,
  },
  data () {
    return {
      name: 'haroro',
    }
  },
  setup () {
    console.log('setup')
    const count = ref(0)
    // 其他的生命周期都写在这里
    onBeforeMount(() => {
      count.value++
      console.log('onBeforeMount', count.value)
    })
    onMounted(() => {
      count.value++
      console.log('onMounted', count.value)
    })
    // 注意，onBeforeUpdate 和 onUpdated 里面不要修改值，会死循环的哦！
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', count.value)
    })
    onUpdated(() => {
      console.log('onUpdated', count.value)
    })
    onBeforeUnmount(() => {
      count.value++
      console.log('onBeforeUnmount', count.value)
    })
    onUnmounted(() => {
      count.value++
      console.log('onUnmounted', count.value)
    })

    return {
      count,
    }
  },
  methods: {
    updateCount () {
      this.count++
    },
  },
}
</script>
<style lang="less" scoped>
.page-content {
  width: 750px;
  height: 750px;
  .setColor(@primary-color);
  color: #fff;

  .title {
    background: #27b07a;
  }
}
</style>
