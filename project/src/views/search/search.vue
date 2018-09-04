<template>
    <div>
        <goback></goback>
        <div class="searchbox">
            <input 
                placeholder="歌手/歌名/拼音"
                class="search-input"
                ref="input"
                v-model="value"
            />
            <button 
                @click="searchsong"
                class="search-btn"
            >搜索</button>
            <div v-if="hotlist">
                <div class="hottitle">
                    最近最新
                </div>
                <ul class="hotlist">
                    <li class="hotitem" v-for="item in hotlist"
                        @click="hotsong(item.keyword)"
                    >
                        {{item.keyword}}
                    </li>
                </ul>
            </div>
            <div v-if="songlist">
                <songlist 
                    :songlist="songlist"
                    v-for="item in songlist" 
                    :key="item.id" :option="item"
                ></songlist>
            </div>
            
        </div>

    </div>
</template>
<script>
    import goback from '../../components/goback'
    import songlist from '../comm/songlist'
    export default{
        data(){
            return{
                hotlist:'',
                songlist:'',
                value:''
            }
        },
        methods:{
            hotsong(name){
                this.$jsonp('http://mobilecdn.kugou.com/api/v3/search/song',
                    {
                        format:"jsonp",
                        keyword:name,
                        page:1,
                        pagesize:30,
                        showtype:1


                    }
                ).then(data=>{
                    console.log(data.data.info)
                    this.songlist=data.data.info,
                    this.hotlist=false
                })
            },
            searchsong(){
                this.$jsonp('http://mobilecdn.kugou.com/api/v3/search/song',
                    {
                        format:"jsonp",
                        keyword:this.value,
                        page:1,
                        pagesize:30,
                        showtype:1


                    }
                ).then(data=>{
                    
                    this.songlist=data.data.info,
                    this.hotlist=false
                })
            }

        },
        created(){
            
            this.$jsonp('http://mobilecdn.kugou.com/api/v3/search/hot/',
            {
                format:"jsonp",
                plat:0,
                count:30
            }).then((res)=>{
                
                this.hotlist=res.data.info
            }).catch((res)=>{console.log(res)});
        },
        mounted(){
            this.$refs.input.focus()
        },
        components:{
            goback,
            songlist
        }
        // http://mobilecdn.kugou.com/api/v3/search/hot/?param=format%3Djsonp%26plat%3D0%26count%3D30%26callback&callback=jsonp_1721089f808f320
        // http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30&callback=kgJSONP836388740
        //http://mobilecdn.kugou.com/api/v3/search/hot/?format=jsonp%26plat%3D0%26count%3D30%26callback&callback=jsonp_482b000dcf3340
    }
</script>
<style>
    ul{
        margin:0;
        padding:0;
        list-style-type:none
    }
    .searchbox{
        padding-top:4rem
    }
    .searchname{
        margin-top:4rem;
    }
    .search-input{
        width: 65%;
        padding: .4rem .0714rem .4rem 1.7rem;
        margin-right: 3%;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        font-size: 1rem;
    }
    .search-btn{
        width: 17.25%;
        height: 2.0714rem;
        line-height: 2.0714rem;
        border: none;
        border-radius: 5px;
        display: inline-block;
        vertical-align: middle;
        font-size: 1rem;
        text-align: center;
    }
    .hotitem{
        height: 3.5714rem;
        line-height: 3.5714rem;
        border-bottom: 1px solid #e5e5e5;
        color: #333;
        font-size: 1.1429rem;
        text-indent: .1786rem;
    }
    .hottitle{
        color:red;
    }

</style>