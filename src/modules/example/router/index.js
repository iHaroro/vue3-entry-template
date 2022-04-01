import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import { routes } from './routes'
import { moduleName } from '../setting'

const router = createRouter({
  history: createWebHashHistory(`/${moduleName}`),
  routes,
})

// 配置路由守卫默认行为
router.beforeEach(({ meta }) => {
  const { title } = meta
  title && (document.title = title)
})

export default router
