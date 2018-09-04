<template>
    <div>
        
        <div class="m-bottom">
        
          <div class="m-progress-box">
            <span class="current-time">{{$apiari.formatTime($store.state.currenttime)}}</span>
            <div 
              class="m-progress" 
              ref="progress"
            >
              <div class="m-progress-line">
                <div class="m-progress-lineed" :style="{ width: left+ 'px' }"></div>
              </div>
              <div 
                    
                  class="m-progress-circle" ref="circle"
                  :style="{left: left + 'px'}"
                ></div>
            </div>
            <span class="total-time">{{$apiari.formatTime($store.state.duration)}}</span>
          </div>
          <div class="m-play-control">
            <div 
              @click="prevSong"
            ><img src='../img/lpro.png'/></div>
            <div
                @click="playOrPause"
            ><img v-show="isPlay" src='../img/lplay.png'/><img v-show="!isPlay" src='../img/lstop.png'/></div>
            <div 
                @click="nextSong"
              
            ><img src='../img/lnext.png'/></div>
          </div>
        </div>
      </div>
</template>
<script>
    export default{
        data(){
                return{
                    isPlay:true,
                    minX:0,
                    maxX: 0,
                }
        },
        computed:{
            left(){
                let l=this.$store.state.currenttime / this.$store.state.duration * this.maxX
                return l
            }
        },
        mounted(){
            this.maxX=this.$refs.progress.clientWidth - this.$refs.circle.offsetWidth
        },
       
        methods:{
            
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
        }
    }
</script>
<style>
    .m-bottom {
        width: 100%;
        position: absolute;
        bottom: 7rem;
        left: 0;
    }
    .m-progress-box {
        padding: 0 .2rem;
        box-sizing: border-box;
        font-size: .12rem;
        display: flex;
        align-items: center;

    }
    .m-progress-box span {
        font-size: .7rem;
        width: 1rem;
    }
    .m-progress {
        
        height: .44rem;
        margin: 0 .1rem;
        display: flex;
        align-items: center;
        position: relative;
        -overflow: hidden;
        width:15rem;
        left:1rem
    }
    .m-progress-line {
        width: 100%;
        background:#9c8d88;
        height: .06rem;
        position: relative;
    }

    .m-progress-lineed {
        width: 0;
        background: #d23d43;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .m-progress-circle {
        width: .4rem;
        height: .4rem;
        background: #fff;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 50%;
        z-index: 2;
    }

    .m-play-control {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .1rem;
    }
    .m-lyric{
        margin-top:2rem;
    }
    .total-time{
        margin-left:1rem
    }
    .m-play-control img{
        width: 1.786rem;
        height: 1.786rem;
        margin:0 0.5rem
    }
    .m-play-control{
        margin-top:0.5rem
    }



</style>