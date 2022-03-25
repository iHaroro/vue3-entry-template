<template>
  <div>
    index
    <p>{{ name }}</p>
    <p>{{ obj }}</p>
    <p>{{ readonlyData }}</p>
    <button @click="router.push('/page1')">page1</button>
    <button @click="router.push('/page2')">page2</button>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  readonly,
} from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'index',
  setup () {
    const router = useRouter()
    let name = ref('haroro')
    let obj = reactive({
      a: 1,
      b: 2,
    })

    let readonlyData = readonly({
      desc: 'this is readonly string',
    })

    return {
      name,
      obj,
      readonlyData,
      router,
    }
  },
}
</script>
<style scoped>
div {
  border: 1px solid #eee;
}
</style>
