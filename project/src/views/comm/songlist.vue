<template>
    <div @click="play">   
        <mt-cell :title="option.filename">
            <span ><img class='down' src="../../components/img/down.png"/></span>
        </mt-cell>
    </div>
</template>
    
<script>
    
    export default{
        props:{
            option:Object,

            songlist:{
                type: Array,
                default(){
                    return {}
                }
            }
        }
        ,
        methods:{
            play(){
                
                this.$store.commit('storehash',{
                    hash:this.option.hash
                })
                this.$store.commit('songlist',{
                    songlist:this.songlist
                })
                this.$store.dispatch('playhash',{
                    
                    hash:this.option.hash
                })
            }

        },
        created(){
            
        }

        
        

    }
</script>
<style>
    .down{
        width: 1.0357rem;
        height: 1.0814rem;
        margin-top: 1.5rem;
        display: inline-block;
    }
</style>