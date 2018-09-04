<template>
  <div>
    <player class="player" v-if="$store.state.isShowPlayer"></player>
    <div class="head">
      <span class="headleft">个人音乐播放器</span>
      <span class="headright"
        @click="searchvue"
      >
        <img class="searchimg" src="./components/img/search.png">
      </span>
    </div>
    <router-view name="nav"></router-view>
    <router-view></router-view>
    <playbottom v-if="$store.state.playInfo"></playbottom>
  </div>
</template>

<script>
import playbottom from './components/play/playbottom'
import player from './components/play/player'
export default {
  name: 'App',
  components:{
    playbottom,
    player
  },
  methods:{
    searchvue(){
      this.$router.push('/search')
    }
  }
}
</script>
<style>
  .head{
    height:2rem
  }
  .headleft{
    float:left
  }
  .headright{
   float:right
  }
  .searchimg{
        height:2.5rem;
        vertical-align:top;
    }
</style>


