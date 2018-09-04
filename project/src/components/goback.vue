<template>
    <div class="goback">
        <img class="img"
            src="./img/goback.png"
            @click="goback"
            />
    </div>
</template>
<script>
    export default{
        methods:{
            goback(){
                this.$router.go(-1),
                this.$store.commit('playshow',{
                    onoff:false
                })
            }
        }
    }
</script>
<style>
    .goback{
        height:2rem;
        width: 100%;
        line-height: 3rem;
       
        padding: 0 2.1429rem;
        position: absolute;
        text-align: center;
        color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .goback .img{
        position: absolute;
        left:0;
        width: 1.5429rem;
        height: 1.8031rem;
    }
</style>