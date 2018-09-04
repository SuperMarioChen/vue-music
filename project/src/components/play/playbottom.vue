<template>
   <div class="play-bottom">
    
      <audio
        :src="$store.state.playInfo.url" 
        autoplay
        ref="audio"
        @timeupdate="radiotimeUpdate"
        @loadedmetadata="radio_loadedmetadata"
      >
      </audio>
      
      <div class="play-left" @click='playshow'>
            <img className="img" :src="$store.state.playInfo.imgUrl && $store.state.playInfo.imgUrl.replace('{size}',240)" alt="加载中" />
            <p>
            <span>{{$store.state.playInfo.songName}}</span>
            
            <span>{{$store.state.playInfo.singerName}}</span>
            </p>
        </div>
          <div class="play-right">
            <div class="iconfont  icon-audio_last_step prev-song"
            @click="prevSong"
            ><img src="../img/pro.png"/></div>
            <div
              @click="playOrPause"
            ><img v-show="isPlay" src='../img/play.png'/><img v-show="!isPlay" src='../img/stop.png'/></div>
            <div 
              
              className="iconfont  icon-audio_next_step next-song"
              @click="nextSong"
            ><img src='../img/next.png'/></div>
            
          </div>
          

    </div>
</template>
<script>
    export default{
        data(){
            return{
                
                isPlay:true,
                
            }
        },
        methods:{
            //显示歌词详情
            playshow(){
                this.$store.commit('playshow',{
                    onoff:true
                })
            },
            //上一首
            prevSong(){
                
                let index=Number(this.$store.getters.index)-1
                
                this.$store.dispatch('playhash',{
                   hash:this.$store.state.songlist[index].hash
                })
                this.$store.commit('storehash',{
                    hash:this.$store.state.songlist[index].hash
                })
            },
            //下一首 通过hash找到index+1
            nextSong(){
                 let index=Number(this.$store.getters.index)+1
                
                this.$store.dispatch('playhash',{
                   hash:this.$store.state.songlist[index].hash
                })
                
                this.$store.dispatch('playhash',{
                   hash:this.$store.state.songlist[index].hash
                })
                this.$store.commit('storehash',{
                    hash:this.$store.state.songlist[index].hash
                })
            },
            //控制播放暂停
            playOrPause(){
                this.isPlay=!this.isPlay
               if (this.$store.state.audio.paused){
                    this.$store.state.audio.play();
                    }else{
                    this.$store.state.audio.pause();
                    }
            },
            //歌曲播放时时执行发送当前播放时间
            radiotimeUpdate(){
                this.$store.commit('radiotimeUpdate',{
                    timeUpdate:this.$refs.audio.currentTime
                })
                let number=0;
                

                
            },
            //歌曲加载完毕发送总时间
            radio_loadedmetadata(){
               
                this.$store.commit('radio_loadedmetadata',{
                    loadedmetadata:this.$refs.audio.duration,
                    audio:this.$refs.audio
                })
            }
           
        },
        created(){
            console.log(this.$store.state)
        }
    }
            
</script>
<style>
    .kugou-play{
        height:5rem;
        width:9rem
    }
    .play-bottom{
        width: 100%;
        height: 4.2143rem;
        background: rgba(122,130,30,0.9);
        position: fixed;
        left: 0;
        bottom: 0;
        overflow: hidden;
        transition: .3s;
        z-index: 9;
    }
    .play-left{
        width: 55%;
        height: 100%;
        float: left;
        overflow: hidden;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
    }
    .play-left img{
        padding: 0;
        width: 3.75rem;
        height: 3.75rem;
        margin: .2143rem .535rem .2143rem .2143rem;
        display: block;
    }
    .play-left p{
        width: 100%;
        line-height: 1.7;
        overflow: hidden;
        white-space: nowrap;
        
        text-overflow: ellipsis;
        font-size: .8571rem;
        color: #fff;
    }
    .play-left p span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
    }
    .play-right{
        position: relative;
        float: left;
        width: 40%;
        box-sizing: border-box;
        font-size: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: .1rem;
        height: 100%;
    }
    .play-right img{
        width: 1.786rem;
        height: 1.786rem;
        margin-left: 1rem;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
    }
    

</style>