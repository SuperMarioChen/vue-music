<template>
    <div class="playbox">
        <div class="bg-overlay"></div>
        <div class="play-overlay"></div>
        <controls></controls>
    </div>
</template>
<script>
    import controls from './playeritem'
    export default{
        components:{
            controls
        }
    }
</script>
<style>
    .playbox{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        -top: 100rem;
        box-sizing: border-box;
        color: #fff;
        background: rgba(0,0,0,.6);
        z-index: 10;
        transition: .5s;
        z-index: 20;
        overflow: hidden;
    }
    .bg-overlay{
        background: url(https://y.gtimg.cn/music/photo_new/T002R300x300M000003lFlWa0CwNbA.jpg?max_age=2592000) no-repeat;
        background-size: cover;
        filter: blur(10px);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .play-overlay{
         width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.6);
    }
</style>