import Index from '@/pages/example/views/index'

export const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: Index,
  },
  {
    path: '/page1',
    name: 'page1',
    meta: {
      title: '页面 1',
    },
    component: () => import('../views/page1'),
  },
  {
    path: '/page2',
    name: 'page2',
    meta: {
      title: '页面 2',
    },
    component: () => import('../views/page2'),
  },
]
