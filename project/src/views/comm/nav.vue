<template>
    <mt-navbar >
        <mt-tab-item 
            
            :id="item.pash" 
            v-for="item in navs"
            :key="item.pash"
        >
            <router-link tag="div" 
                :to="{path:item.path}"
            >{{item.title}}</router-link>
        </mt-tab-item>
       
    </mt-navbar>
</template>
<script>
    import {navs} from '../../router/nav'
    export default{
        data(){
            return{
                navs
            }
        }
    }
</script>
<style>
    .mint-navbar .mint-tab-item.is-selected{
        border-bottom: transparent;
        color:#000
    }
    .router-link-exact-active{
        
        color: #33a3f5;
    }
</style>