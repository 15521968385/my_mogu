import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('@/views/home/home')
const fenLei = () => import('@/views/fenlei/fenLei')
const cart = () => import('@/views/cart/cart')
const my = () => import('@/views/my/my')
const bannerItem = () => import('@/views/home/bannerItem')
const huodongGoods = () => import('@/views/home/huodongGoods')
const goodsXiangqing = () => import('@/views/public/goodsXiangqing')
const goodsPinglun = () => import('@/views/public/goodsPinglun')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/fenlei',
    component: fenLei,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/my',
    component: my,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/home/banneritem/:param',
    component: bannerItem,
    meta: {
      title: '轮播图详情'
    }
  },
 
  {
    path:'/home/huodong/:param',
    component:huodongGoods,
    meta:{
      title:'热门活动'
    }
  },
  {
    path:'/home/goodsxiangqing/:goodId',
    component:goodsXiangqing,
    meta:{
      title:'商品详情'
    }
  },
  {
    path:'/home/goodspinglun/:goodId',
    component:goodsPinglun,
    meta:{
      title:'商品评论'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((from, to, next) => {
  document.title = from.meta.title
  next()
})

export default router
