<template>
    <div class="control">
        <playgc></playgc>
        <playercontrol></playercontrol>
    </div>
    
</template>
<script>
    import playercontrol from './player-control'
    import playgc from './playgc'
    export default{
        components:{
            playercontrol,
            playgc
        }
    }
</script>
<style>
    .control{
        position: absolute;
        height:100%;
        width:100%

    }
</style>