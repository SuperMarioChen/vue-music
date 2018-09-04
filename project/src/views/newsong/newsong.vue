<template>
    <div>
      <div class="ban">
      
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in bannerlist" :key="item.id">
            <img :src="item.imgurl" alt=""/>
          </mt-swipe-item>
          
        </mt-swipe>
      </div>
      <div>
        <songlist 
          :songlist="songlist"
          v-for="item in songlist" 
          :key="item.id" :option="item"
          
        ></songlist>
      </div>
    </div>
</template>
<script>
    import songlist from '../comm/songlist'
   export default {
    data(){
      return {
        bannerlist:[],
        songlist:[]
      }
    },
    components:{
      songlist
    },
    
    created(){
       console.log(this)
      this.$api.getNewSongs().then((data)=>{
          this.bannerlist=data.data.banner
          this.songlist=data.data.data
          console.log(this.songlist)
          
      })
    }
  }

</script>
<style>
  .ban{
    margin-top:0.5rem;
    width: 100%;
    height: 12.5rem;
    position: relative;
    overflow: hidden;
  }
  .ban img{
        width: 100%;
        height:100%
  }
  .mint-cell-wrapper{
    width: 100%;
    height: 4.0714rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
  }
  .mint-cell-title{
    width: 100%;
    padding-right: 2.657rem;
    display: table-cell;
    vertical-align: middle;
    padding-left: .3571rem;
    cursor: pointer;
    font-size: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .mint-cell-text{
    cursor: pointer;
    font-size: 1rem;
  }
  body{
        font-size: 1rem;
    background: #fff;
    color: #333;
    position: relative;
    font-family: 'Microsoft Yahei';
  }
  .dowm{
        width: 1.0357rem;
      height: 1.0814rem;
      margin-top: 1.5rem;
      display: inline-block;
  }
  
</style>
