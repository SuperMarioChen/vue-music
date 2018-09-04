<template>
    <div class="gcbox"
        ref="gcbox"
    >   
        <img src="../img/goback.png"
            class="gcimg"
            @click="hidden"
        />
        <div class="gclist" 
            :style="{
                top:-number*ps+'px'
            }"
        >
            <p  class="gcp"
                ref='p'
                v-for="item,index in this.$apiari.parseLyric(this.$store.state.gc.data)"
                :style="{color:(index===currentindex)?'#d1c90e' : ''}"
            >{{item[1]}}</p>
        </div>
    </div>
</template>
<script>
    import goback from '../goback'
    export default{
        data(){
            return{
                m:0,
                ps:0,
                currentindex:0,
            }
        },
        methods:{
            hidden(){
                 this.$store.commit('playshow',{
                    onoff:false
                })
            }
        },
        
        
        computed:{
            number(){
                let n=0
                for( var i = 0; i < this.$apiari.parseLyric(this.$store.state.gc.data).length; i++ ){
                        if(this.$store.state.currenttime >this.$apiari.parseLyric(this.$store.state.gc.data)[i][0]){
                            n=i
                            this.currentindex=i
                        }
                    }
                if(n>this.m){
                    return n=n-this.m
                }
                
            }   
        },
        

        
        mounted(){
            this.m = Math.round(this.$refs.gcbox.clientHeight/this.$refs.p[0].clientHeight/2) - 2
            this.ps=this.$refs.p[0].clientHeight
            
        }
    }
</script>
<style>
    body{
        margin:0
    }
    .gcbox{
        height: 68%;
        overflow: hidden;
        position: relative;
        z-index: 2;
        margin-top: .6rem;
    }
    .gclist{
        width: 100%;
        position: absolute;
        left: 0;
    }
    .gcp{
        text-align: center;
         margin: 0;
        line-height:1.7857rem;
        font-size:.8571rem;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .gcimg{
        position: absolute;
        z-index:30;
        left:0;
        width: 1.5429rem;
        height: 1.8031rem;
    }
</style>