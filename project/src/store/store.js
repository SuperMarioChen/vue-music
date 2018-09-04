import Vue from 'vue'
import Vuex from 'vuex'
import {getSongMp3,getRc} from '../server/searchMp3'
Vue.use(Vuex);
let store = new Vuex.Store({
    
    state: {
        playhash:'',
        songlist:[],
        playInfo: '',
        isShowPlayer:false,
        isPlay: true,
        currenttime:'',
        duration:1,
        gc:'',
        audio:''
        
    },
    // 类似是组件中计算属性
    getters:{
        index(state){
            return state.songlist.findIndex(item=>item.hash==state.playhash)
        }
        

    },
    mutations:{
        //歌词详情是否显示
        playshow(state,payload){
            state.isShowPlayer=payload.onoff
        },
        //歌曲信息
        songinfo(state,payload){
            
            state.playInfo=payload.playInfo
        },
        //改变仓库haxi
        storehash(state,payload){
            state.playhash=payload.hash
        },
        //歌曲列表用来做上下首的
        songlist(state,payload){
            state.songlist=payload.songlist
        },
        //更新现在播放时间的
        radiotimeUpdate(state,payload){
            state.currenttime=payload.timeUpdate
        },
        //接收歌曲总时间
        radio_loadedmetadata(state,payload){
            state.duration=payload.loadedmetadata
            state.audio=payload.audio
        },
        //接收歌词
        gc(state,payload){
            state.gc=payload.gc
        },
    },
    actions:{
        playhash(store,playload){
            
             getSongMp3({hash:playload.hash}).then((data)=>{
                
                 store.commit('songinfo',{
                    playInfo: data.data
                  })
                  getRc(
                      {hash:playload.hash,keyword:this.state.playInfo.songName}
                  ).then(data=>{
                    store.commit('gc',{
                        gc: data
                      })
                  })
                  
                 
                  
            })
        }
    }
  })
  
export default store;