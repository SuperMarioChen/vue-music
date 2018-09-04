<template>
    <ul class="plistul">
        <li class="li" v-for="item in data"
            @click="showplistlist(item.specialid)"
        >
            <div class="panel-img-left">
                <img :src="item.imgurl.replace('{size}',240)"
                    class="pimg"
                />
            </div>
            <div class="panel-img-content">
                <p class="panel-img-content-first">{{item.specialname}}</p>
            </div>
            <div class="panel-img-content-sub">
                <i class="icon-music">{{item.playcount}}</i>
            </div>
        </li>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                data:''
            }
        },
        methods:{
            showplistlist(id){
                this.$router.push(`/plist/list/${id}`)
            }
        },
        created(){
            this.$api.getPlist().then((data)=>{
                
                this.data=data.data.data
            })
        }
    }
</script>
<style>
    .plistul{
        margin-top:3rem;
    }
    p{
        margin:0
    }
    ul{
        padding: 0;
        margin: 0;
        list-style-type:none

    }
    .li{
        
        position: relative;
        margin-left: .7143rem;
        padding: .7143rem 2.14286rem .7143rem 6.4286rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .panel-img-left{
        position: absolute;
        top: .7143rem;
        left: 0;
        width: 5.3751rem;
        height: 5.3751rem;
    }
    .panel-img-left img{
        width:100%;
        vertical-align: middle;
    }
    .panel-img-content{
        min-height: 5.3751rem;
        line-height: 5.3751rem;
        display: block;
        font-size: 1.0714rem;
        color: #333;
        line-height: 1.5;
        font-size: 1rem;
    }
    .panel-img-content-first{
        padding-top: 1.4286rem;
    }
    .panel-img-content-sub{
        
        color: #9b9b9b;
        font-size: .7857rem;
    }
    .icon-music{
        width: .7143rem;
        height: .7143rem;
        margin-top: .10714rem;
        margin-right: .2857rem;
        display: inline-block;
        
        
    }
</style>