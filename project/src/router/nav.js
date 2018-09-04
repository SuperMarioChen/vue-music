import Nav from '../views/comm/nav'
import Singer from '../views/singer/singer'
import Plist from '../views/plist/plist'
import Newsong from '../views/newsong/newsong'
import Rank from '../views/rank/rank'

export let navs=[
    {
        path: '/',
        name: 'Newsong',
        title:'新歌',
        components:{
          nav:Nav,
          default:Newsong
        }
      }
      ,
      {
        path: '/rank',
        name: 'Rank',
        title:'排名',
        components:{
          nav:Nav,
          default:Rank
        }
      }
      
      ,
      {
        path: '/singer',
        name: 'Singer',
        title:'歌手',
        components:{
          nav:Nav,
          default:Singer
        }
      }
      ,
      {
        path: '/plist',
        name: 'Plist',
        title:'列表',
        components:{
          nav:Nav,
          default:Plist
        }
      }
]