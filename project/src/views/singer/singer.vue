<template>
    <div class="singer">
        <ul>
            <li 
                v-for="item in data"
                class="songlist"
                @click="getsongclass(item.classid)"
            >{{item.classname}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                data:''
            }
        },
        methods:{
            getsongclass(id){
                this.$router.push(`/singer/list/${id}`)
            }
        },
        created(){
            this.$api.getSingers().then(data=>{
                
                this.data=data.data.data
            })
        }
    }
</script>
<style>
    ul,li{
        margin:0;
        padding:0;
        list-style-type:none
    }
    .singer{
        margin-top:3.5rem
    }
    .songlist{
        margin: 1rem .7143rem 1.0714rem .7143rem;
        background: #fbfbfb;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        height:2rem;
        width:17rem;
        line-height:2rem;
        font-size: 1rem;
        text-indent:1rem;
    }
</style>