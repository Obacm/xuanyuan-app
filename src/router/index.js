import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Player from '../components/Player'
import Boss from '../components/Boss'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: '玄元剑仙_计量器'
    }
  },
  {
    path: '/player',
    component: Player,
    name: 'Player',
    meta: {
      title: '计量器_玩家'
    }
  },
  {
    path: '/boss',
    component: Boss,
    name: 'Boss',
    meta: {
      title: '计量器_Boss'
    }
  },
]

let router = new Router({
  routes: routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router