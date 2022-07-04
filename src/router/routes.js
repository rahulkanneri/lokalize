import HomePage from '@/views/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail'),
  },
]
