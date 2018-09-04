<template>
   <div>
         <div>
            <goback></goback>
            <div class="hotsonger">热门歌手</div>
        </div>
        <div class="singerlistbox">
            <div v-for="item in data" 
                class="singerlist"
                @click="getsingerlistid(item.singerid)"
                >
                <mt-cell :title="item.singername">
                    
                    <img class="singerlistimg" slot="icon" :src="item.imgurl.replace('{size}',400)" width="24" height="24">
                </mt-cell>
            </div>
        </div>
   </div>
    
</template>
<script>
    import goback from '../../components/goback'
    export default{
        data(){
            return{
                data:''
            }
        },
        methods:{
            getsingerlistid(id){
                this.$router.push(`/singer/info/${id}`)
            }
        },
        components:{
           
            goback
        },
        created(){
            this.$api.getSingerList({
                classid:this.$route.params.id
            }).then(data=>{
                console.log(data)
                this.data=data.data.data
                
            })
        }
    }
</script>
<style>
    .hotsonger{
        text-indent:8rem;
        line-height:2rem;
        font-size: 1rem;
    }
    .singerlistimg{
        width: 3.3929rem;
        height: 3.3929rem;
    }
    .singerlist{
        padding:0.5rem 0
    }
    .singerlistbox{
        margin-top:1rem;
    }
</style>