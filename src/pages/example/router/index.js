import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 配置路由守卫默认行为
router.beforeEach(({ meta }) => {
  const { title } = meta
  title && (document.title = title)
})

export default router
