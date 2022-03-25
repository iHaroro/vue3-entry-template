<template>
  <div>
    index
    <p>{{ name }}</p>
    <p>{{ obj }}</p>
    <p>{{ readonlyData }}</p>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  readonly,
} from 'vue'

export default {
  name: 'index',
  setup () {
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
    }
  },
}
</script>
<style scoped>
div {
  border: 1px solid #eee;
}
</style>
