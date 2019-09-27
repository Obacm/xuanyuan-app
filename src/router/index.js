import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Player from '../views/Player'
import Boss from '../views/Boss'
import Faction from '../views/Faction'
import Grade from '../views/Grade'
import Skill from '../views/Skill'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: Home,
    name: '首页',
    meta: {
      title: '玄元剑仙_计量器',
      variant: '',
      display: false,
    }
  },
  {
    path: '/player',
    component: Player,
    name: '玩家',
    meta: {
      title: '计量器_玩家',
      variant: 'primary',
      display: true,
    }
  },
  {
    path: '/boss',
    component: Boss,
    name: '怪物',
    meta: {
      title: '计量器_Boss',
      variant: 'danger',
      display: true,
    }
  },
  {
    path: '/faction',
    component: Faction,
    name: '门派',
    meta: {
      title: '计量器_门派',
      variant: 'warning',
      display: true,
    }
  },
  {
    path: '/grade',
    component: Grade,
    name: '境界',
    meta: {
      title: '计量器_境界',
      variant: 'info',
      display: true,
    }
  },
  {
    path: '/skill',
    component: Skill,
    name: '功法',
    meta: {
      title: '计量器_功法',
      variant: 'dark',
      display: true,
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