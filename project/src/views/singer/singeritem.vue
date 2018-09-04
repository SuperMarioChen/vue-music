<template>
    <div>
        <div class="singer-info-hd">
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
                songinfo:'',
            }
        },
        components:{
            songlist,
            goback
        },
        created(){
            this.$api.getSingerInfo({
                singerid:this.$route.params.id
            }).then(data=>{
                console.log(data.data.data)
                console.log(data.data.info)                
                this.songlist=data.data.data
                this.songinfo=data.data.info
            })
        }
    }
</script>
<style>
    .singer-info-hd{
        position:absolute;
        width: 100%;
        height: 10.5rem;
        position: relative;
        overflow: hidden;
    }
    .singer-info-hd img{
        width:100%;
        height:100%
    }

</style>