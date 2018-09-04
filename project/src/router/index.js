import Vue from 'vue'
import Router from 'vue-router'
import Ranklist from '../views/rank/ranklist'
import Plistlist from '../views/plist/plistlist'
import Singerlist from '../views/singer/singerlist'
import Singeritem from '../views/singer/singeritem'
import Search from '../views/search/search'
import  {navs} from './nav'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    ...navs
    ,
    {
      path: '/search',
      name: 'Search',
      component:Search
    }
    ,
    {
      path: '/rank/info/:id?',
      name: 'Ranklist',
      component: Ranklist
    },
    ,
    {
      path: '/plist/list/:id?',
      name: 'Plistlist',
      component: Plistlist
    },
    ,
    {
      path: '/singer/list/:id?',
      name: 'Singerlist',
      component: Singerlist
    },
    {
      path: '/singer/info/:id?',
      name:'Singeritem',
      component: Singeritem
    },
  ]
})
