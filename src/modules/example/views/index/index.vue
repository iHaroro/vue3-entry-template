<template>
  <div>
    <p>index</p>
    <p>{{ name }}</p>
    <p>{{ obj }}</p>
    <p>{{ readonlyData }}</p>
    <button @click="router.push('/page1')">page1</button>
    <button @click="router.push('/page2')">page2</button>
    <WechatComponent />
  </div>
</template>

<script>
import WechatComponent from '../../components/WechatComponent'
import { useRouter } from 'vue-router'
import {
  ref,
  reactive,
  readonly,
  provide,
} from 'vue'

export default {
  name: 'index',
  components: {
    WechatComponent,
  },
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

    provide('msg', '12345')

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
