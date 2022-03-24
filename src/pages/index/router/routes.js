import Index from '@/pages/index/views/index'

export const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/page1'),
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/page2'),
  },
]
