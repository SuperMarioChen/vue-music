<template>
    <div class="rank" >
        <div v-for='item in data' 
            :key='item.id' 
            class="ranklist" 
            @click="rankitem(item.rankid)">
            <mt-cell :title="item.rankname">
                
                <img class="banimg" slot="icon" :src="item.imgurl.replace('{size}',400)" >
            </mt-cell>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                data:'',
                
            }
        },
        methods:{
            rankitem(id){
                this.$router.push(`rank/info/${id}`)
            }
        },
        created(){
            this.$api.getRankList().then((data)=>{
                
                this.data=data.data.data
                
            })
        }
    }
</script>
<style>
    .rank{
        width: 100%;
        margin-top: 2.5rem;
    }
    .mint-cell{
        
        height: 5.3751rem;
    }
    .mint-cell .banimg{
        vertical-align: middle;
        
        width: 5.3751rem;
        height: 5.3751rem;
    }
    .mint-cell-left{

    }

</style>