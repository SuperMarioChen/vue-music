<template>
        <div>
           <div class="plist-info-hd">
                <goback></goback>
                <img :src="songinfo.imgurl?songinfo.imgurl.replace('{size}',400):''"/>
            </div>
            <songlist 
                :songlist="songlist"
                v-for="item in songlist" 
                :key="item.id" :option="item"
            ></songlist>
        </div>
</template>
<script>
    import songlist from '../comm/songlist'
    import goback from '../../components/goback'
    export default{
        data(){
            return{
                songlist:'',
                songinfo:''
            }
        },
        components:{
            songlist,
            goback
        },
        created(){
            this.$ap.getPlistInfo({
                id:this.$route.params.id
            }).then(data=>{
               
                this.songlist=data.data.list.list.info
                this.songinfo=data.data.info.list
            })
        }
    }
</script>
<style>
    .plist-info-hd{
        position:absolute;
        width: 100%;
        height: 10.5rem;
        position: relative;
        overflow: hidden;
    }
    .plist-info-hd img{
        width:100%;
        height:100%
    }
</style>