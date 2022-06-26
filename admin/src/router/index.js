import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  
  {
    path: '/pcRecommend',
    component: Layout,
    name: 'recommendHome',
    redirect: '/pcRecommend/home',
    meta: { title: '配置管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'home',
        name: 'recommendHome',
        component: () => import('@/views/recommend/pc/home/index'),
        meta: { title: '首页推荐', icon: 'dashboard' }
      },
      {
        path: 'bind',
        name: 'bindVideo',
        hidden: true,
        component: () => import('@/views/recommend/pc/bind/index'),
        meta: { title: '绑定视频', icon: 'dashboard' }
      },
    ]
  },

  {
    path: '/video',
    component: Layout,
    name: 'video',
    redirect: '/video/videoList',
    meta: { title: '视频', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'videoList',
        name: 'videoList',
        component: () => import('@/views/video/list/index'),
        meta: { title: '视频列表', icon: 'dashboard' }
      },
   
      // {
      //   path: 'warehousing',
      //   name: 'warehousing',
      //   component: () => import('@/views/video/warehousing/index'),
      //   meta: { title: '视频入库', icon: 'dashboard' }
      // }
    ]
  },
  {
    path: '/userList',
    component: Layout,
    name: 'userList',
    redirect: '/video/userList',
    meta: { title: '用户', icon: 'el-icon-s-help' },
    children: [
   
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/userList/list/index'),
        meta: { title: '用户列表', icon: 'dashboard' }
      },
      // {
      //   path: 'warehousing',
      //   name: 'warehousing',
      //   component: () => import('@/views/video/warehousing/index'),
      //   meta: { title: '视频入库', icon: 'dashboard' }
      // }
    ]
  },

  {
    path: '/category',
    component: Layout,
    name: 'category',
    redirect: '/category/video',
    meta: { title: '分类', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/category/video/index'),
        meta: { title: '视频分类', icon: 'dashboard' }
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/category/article/index'),
        meta: { title: '文章分类', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/collection',
    component: Layout,
    name: 'collection',
    redirect: '/collection/setup',
    meta: { title: '采集', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'maccms',
        name: 'maccms',
        hidden: true,
        component: () => import('@/views/collection/maccms/index'),
        meta: { title: 'maccms接口配置', icon: 'dashboard' }
      },
      {
        path: 'setup',
        name: 'setup',
        component: () => import('@/views/collection/setup/index'),
        meta: { title: '自定义接口', icon: 'dashboard' }
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('@/views/collection/schedule/index'),
        meta: { title: '定时采集', icon: 'dashboard' }
      },
    ]
  },

  // {
  //   path: '/schedule',
  //   component: Layout,
  //   name: 'schedule',
  //   redirect: '/schedule/list',
  //   meta: { title: '定时任务', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'list',
  //       name: 'list',
  //       component: () => import('@/views/schedule/list/index'),
  //       meta: { title: '定时任务列表', icon: 'dashboard' }
  //     },
  //     {
  //       path: 'log',
  //       name: 'log',
  //       component: () => import('@/views/schedule/log/index'),
  //       meta: { title: '定时任务日志', icon: 'dashboard' }
  //     },
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
