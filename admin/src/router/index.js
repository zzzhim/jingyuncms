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
    meta: { title: 'PC推荐', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'home',
        name: 'recommendHome',
        component: () => import('@/views/recommend/pc/home/index'),
        meta: { title: '首页推荐', icon: 'dashboard' }
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
    ]
  },
  
  {
    path: '/schedule',
    component: Layout,
    name: 'schedule',
    redirect: '/schedule/list',
    meta: { title: '定时任务', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/schedule/list/index'),
        meta: { title: '定时任务列表', icon: 'dashboard' }
      },
      {
        path: 'log',
        name: 'log',
        component: () => import('@/views/schedule/log/index'),
        meta: { title: '定时任务日志', icon: 'dashboard' }
      },
    ]
  },

  // {
  //   path: '/ffmpeg',
  //   component: Layout,
  //   name: 'ffmpeg',
  //   meta: { title: '切片系统', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'localVideo',
  //       name: 'localVideo',
  //       component: () => import('@/views/ffmpeg/localVideo/index'),
  //       meta: { title: 'Mp4视频列表', icon: 'dashboard' }
  //     },
  //     {
  //       path: 'localM3u8',
  //       name: 'localM3u8',
  //       component: () => import('@/views/ffmpeg/localM3u8/index'),
  //       meta: { title: 'M3u8视频列表', icon: 'dashboard' }
  //     },
  //     {
  //       path: 'downM3u8',
  //       name: 'downM3u8',
  //       component: () => import('@/views/ffmpeg/downM3u8/index'),
  //       meta: { title: '下载m3u8视频', icon: 'dashboard' }
  //     }
  //   ]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
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
