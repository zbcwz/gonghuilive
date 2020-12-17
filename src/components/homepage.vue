<style>
  .clearfix:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }

  .nav_ten {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    background: white;
  }

  .nav_ten,
  .nav_ten tr,
  .nav_ten td {
    border: none;
  }

  .nav_ten p {
    color: #666;
    font-size: 13px;
    margin: 0px;
  }

  .nav_ten td {
    padding: 8px 5px;
  }

  .nav_ten td img {
    /* width: 60%; */
    width: 46%;
  }

  .new_one i {
    display: none;
  }

  .new_one .mint-cell-title .mint-cell-text {
    font-size: 14px;
  }

  .new_one .mint-cell-value.is-link {
    width: 25%;
    margin: 0 0 0 3px;
  }

  .luckly img {
    width: 100%;
    /*height: 100%;*/
  }

  .luckly dd {
    margin: 0;
    font-size: 15px;
    line-height: 20px;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .luckly dl {
    float: left;
    padding: 4px;
    padding-bottom: 0;
    width: 50%;
    margin-top: 8px;
    margin-bottom: 0;
  }

  /*.ssss {
		font-size: 13px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		color: #666;
	}*/

  .more .mint-cell-text {
    margin-left: 20px;
    font-size: 13px;
  }

  .morenews .mint-cell-wrapper {
    padding-left: 5px;
  }

  .more .mint-cell-wrapper {
    background-repeat: repeat-x;
  }

  .fuli_border .mint-cell-wrapper {
    background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 50%);
  }

  .mint-cell:last-child {
    background-size: 0% 0px;
  }

  .worker .mint-cell-title span {
    margin-top: 2px;
    display: inline-block;
  }

  .bornone .mint-cell-wrapper {
    background-image: none;
  }

  .bornone .mint-cell-text {
    color: #666;
  }

  .bornone .mint-cell-value span {
    font-size: 14px;

  }

  .ssss {
    animation: move 3s ease infinite;
  }

  @keyframes move {

    /*  此处从75%开始 */
    /*0%{ transform: translateY(0px);}*/
    75% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-50px);
    }
  }

  .mui-table-view {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
  }

  .mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
  }

  .mint_line {
    background-image: linear-gradient(rgb(217, 217, 217), rgb(217, 217, 217) 50%, transparent 50%);
    background-size: 120% 1px;
    background-origin: content-box;
    background-repeat: no-repeat;
  }

  .mint-swipe-indicator.is-active {
    opacity: 1;
  }

  .mint-swipe-indicators {
    bottom: 8px;
    width: 100%;
    text-align: right;
    z-index: 1;
    /* z-index: 999; */
    padding-right: 8px;
  }

  .ellips {
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 20px;
  }

  .homepage .answer {
    background-color: #f4f5f7;
    width: 100%;
    position: relative;
    padding: 0px 10px;
    height: auto;
  }

  .homepage .triggle {
    width: 25px;
    height: 10px;
    position: absolute;
    left: 15px;
    top: -10px;
    background-image: url(./imgs/littletip.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .homepage .myanswer {
    overflow: hidden;
    margin: 3px 0;
    font-size: 15px;
    word-wrap: break-word;
    color: #555;
  }

  #miss {
    position: absolute;
    left: 0;
    width: 100%;
    top: 20px;
    margin: 0 auto;
  }

  .missPage {
    width: 210px;
    height: 210px;
    margin: 0 auto;
    margin-top: 100px;
  }

  .missPage img {
    width: 100%;
    height: 100%;
  }

  .missText {
    text-align: center;
  }

  .missText h3 {
    color: #999;
    font-weight: normal;

  }

  .retry {
    width: 150px;
    margin: 0 auto;
    border: 1px solid #FD7B27;
    border-radius: 5px;
    margin-top: 10px;
  }

  .retry h3 {
    margin: 5px;
    padding: 0;
    color: #FD6F27;
  }

  .swipe-img{
    width: 100%;
  }
</style>

<template>
  <div class="homepage">

    <van-swipe style="height: 4.88rem" v-if="bannerList.length > 0" :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for=" (banner,index) in bannerList" :key="banner.id">
        <a :href="banner.link"><img class="swipe-img" v-lazy="banner.thumb" ></a>
      </van-swipe-item>

    </van-swipe>
    <van-search placeholder="请输入搜索关键词"  v-model="keywords"    @search="onSearch" />
    <!--    <mt-navbar v-model="selected" style='margin-bottom: 2%;'>
      <mt-tab-item id="0">全部</mt-tab-item>
      <mt-tab-item v-if="classvalue" v-for="( classvalue,index) in classList" :id="classvalue.id" :key="index">{{classvalue.name}}
      </mt-tab-item>
    </mt-navbar> -->

    <van-tabs v-model="selected" sticky>
      <van-tab title="全部" name="0">
        <van-list v-model="classList[0].loadingMoreStatus" :finished="classList[0].finished" :error.sync="classList[0].error"
          finished-text="没有更多了" error-text="请求失败，点击重新加载" @load="loadMore">

          <!-- <mt-loadmore  :bottom-method="loadBottom"  :bottom-all-loaded="false" :distance-index="10"  ref="homepage"> -->
          <LiveList v-for="(n ,index) in listValue[0]" :listvalues="n" title="aa" :key="index"></LiveList>

        </van-list>
      </van-tab>
      <van-tab v-if="classvalue && classvalue.id != 0" v-for="( classvalue,index) in classList" :title="classvalue.name"
        :name="classvalue.id" :key="index">
        <van-list v-model="classList[classvalue.id].loadingMoreStatus" :finished="classList[classvalue.id].finished"
          :error.sync="classList[classvalue.id].error" finished-text="没有更多了" error-text="请求失败，点击重新加载" @load="loadMore">

          <!-- <mt-loadmore  :bottom-method="loadBottom"  :bottom-all-loaded="false" :distance-index="10"  ref="homepage"> -->
          <LiveList v-for="(n ,index) in listValue[classvalue.id]"  :key="index" :listvalues="n" title="aa"></LiveList>
          <!-- <LiveList  v-else @click.native="tolink('http://www.baidu.com')" :key="index" :listvalues="n"  title="aa"></LiveList> -->

        </van-list>

      </van-tab>

    </van-tabs>

    <!-- 			<mt-swipe :auto="4000" style="height: 150px;" :showIndicators='bannerList.length>1'>
				<mt-swipe-item v-for="obj in bannerList" v-if='obj.bannerPostionY===1' @click.native="bannergo(obj)">
					<img :src="obj.bqPhotoUrl||''" width="100%" height="100%" @error="$event.target.src=errorBanner" />
					<div v-if='obj.template' style="position: absolute; bottom: 0;   z-index:  11; width: 100%;background-color: rgba(0,0,0,.4); padding:8px ;  color: #fff;">
						<p style="width: 90%; margin: 0;-webkit-line-clamp: 1;font-size: 14px;" class="ellip">{{obj.template}}</p>
					</div>
				</mt-swipe-item>
			</mt-swipe> -->


    <!-- tab-container -->




    <!-- 			<mt-swipe :auto="4000" style="height: 150px;">
				<mt-swipe-item v-for="obj in bannerList" v-if='obj.bannerPostionY===2' @click.native="bannergo(obj)">
					<img :src="obj.bqPhotoUrl||''" width="100%" height="100%" @error="$event.target.src=errorBanner" />
				</mt-swipe-item>
			</mt-swipe> -->



    <div id="miss" v-if="offLine == true || offLine == 'true'">

      <div class="missText">
        <h3>呀，页面出错啦！</h3>
      </div>
      <div class="missText retry" @click.native="retry()">
        <h3>请检查网络</h3>
      </div>
    </div>
  </div>

</template>
<script>

  import LiveList from './LiveList.vue'
  import wxApi from '../plugins/shareConfig.js'
  //	import defaultyhq from './imgs/defaultyhq.png'
  let lun = null;
  export default {
    name: 'homepage',
    data() {
      return {
        selected: "0",
        keywords: "",
        //loadingMoreStatus: false,
        listValue: [
          //[]
        ],
        classList: {
          0: {
            id: 0,
            page: 1,
            loadingMoreStatus: false,
            finished: false, //全部加载完成,还没有做
            error: false
          },
        },

        offLine: false,

        bannerList: [],
        //				bannerList2: [],

        moduleListL: [],
        carousel: '',
        recommend: {
          first: {
            name: '',
            list: []
          },
          second: {
            name: '',
            list: []
          },
          third: {
            name: '',
            list: []
          },
          fouth: {
            name: '',
            list: []
          }
        },
        goodsList: []
      };
    },
    created() {
/*      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '加载中...',
      }); */
      //console.log(this.$toast);
 //this.$toast(1111);
      this.listPageInit();
      //this.getLiveList();
      var wxConfig = {
        title: this.pageconfig.sharetitle, // 分享标题
        desc: this.pageconfig.sharedesc,
        link: '', // 分享链接
        imgUrl: this.pageconfig.shareimgUrl, // 分享图标
        success: function() {
          // 用户确认分享后执行的回调函数
        },
        cancel: function() {
          // 用户取消分享后执行的回调函数
        }
      };

      wxApi.shareDetail(wxConfig);
      //this.pageInit();
      //var self = this;
      //			console.log('')
      //			if(window.plus){
      //				console.log('app环境')
      //				self.checkNet()
      //			}else{
      //				console.log('网页环境')
      //				document.addEventListener('plusready',function(){
      //					self.checkNet()
      //				})
      //			}
    },
    mounted() {

    },
    components: {
      LiveList,
      //[List.name]: List,
    },
    watch: {
      // 如果 `selected` 发生改变，这个函数就会运行
      /*      selected: function (newselected, oldselected) {
              var self = this;
              $.ajax({
                url: "/app/index.php?i=3&c=entry&m=ewei_shopv2&do=mobile&r=live.list.get_list",
                type: "GET",
                data:{
                  page: 1,
                  cate: newselected
                },
                dataType: "json",
                success: function(d){
                  console.log(d);
                  if(d.status == 1){
                    console.log(newselected);
                    console.log(self.listValue[newselected]);
                    if(!self.listValue[newselected]){
                      //self.listValue[newselected] = new Array();
                      self.listValue .push([]);
微信、qq、交管12123、百度地图、滴滴出行、今日头条、京东、手机淘宝、支付宝、网易云、咪咕、百度贴吧、哈罗、腾讯体育、闲鱼、360行车、369出行、幸运破解器
                    }

                    for(let i = 0; i< d.result.list.length; i++){
                      console.log(self.listValue[newselected]);
                        self.listValue[newselected] .push( d.result.list[i]);

                    }

                  }else{
                    console.log('ajax列表获取不到数据，这里需要给一个错误提示');
                  }
                  console.log(self.listValue[newselected]);
                }
              });
              //this.answer = 'Waiting for you to stop typing...'
            } */
    },
    methods: {

      listPageInit() {
        console.log(this.pageconfig);
        var self = this;
        $.ajax({
          url: "/app/index.php?i="+this.pageconfig.uniacid+"&c=entry&m=ewei_shopv2&do=mobile&r=live.list.get_list_info",
          type: "GET",
          data: {
            page: 1,
            cate: 0,
            keywords: self.keywords
          },
          dataType: "json",
          success: function(d) {
            //self.$toast.clear();
            //console.log(d.result.category);

            //self.classList = d.result.category;
            //self.classList.push(d.result.category);

            for (let i = 0; i < d.result.category.length; i++) {
              // console.log(d.result.category[i].id);
              d.result.category[i].finished = false;
              d.result.category[i].loadingMoreStatus = false;
              d.result.category[i].error = false;
              d.result.category[i].page = 1;

              self.$set(self.classList, d.result.category[i].id, d.result.category[i]);
            }

            self.bannerList = d.result.banner;
            console.log(self.bannerList);
            //console.log(self.classList);
          },
          error: function() {
             //self.$toast.clear();

          },
        });
      },

      getLiveList() {//弃用

        var self = this;

        $.ajax({
          url: "/app/index.php?i="+this.pageconfig.uniacid+"&c=entry&m=ewei_shopv2&do=mobile&r=live.list.get_list",
          type: "GET",
          data: {
            page: 1,
            cate: 0,
            keywords: self.keywords
          },
          dataType: "json",
          success: function(d) {

            if (d.status == 1) {

              //self.listValue[0] = d.result.list;
              if (!self.listValue[0]) {
                self.listValue.push([]);
              }
              for (let i = 0; i < d.result.list.length; i++) {
                self.listValue[0].push(d.result.list[i]);
              }
            } else {
              console.log('ajax列表获取不到数据，这里需要给一个错误提示');
            }
            //console.log(self.listValue[0]);
          }
        });


      },
      loadMore() {

        var self = this;

        self.classList[self.selected].loadingMoreStatus = true;
        console.log(self.classList[self.selected]);

        $.ajax({
          url: "/app/index.php?i="+this.pageconfig.uniacid+"&c=entry&m=ewei_shopv2&do=mobile&r=live.list.get_list_info",
          type: "GET",
          data: {
            page: self.classList[self.selected].page,
            cate: self.selected,
            keywords: self.keywords
          },
          dataType: "json",
          success: function(d) {

            self.classList[self.selected].loadingMoreStatus = false;
            self.classList[self.selected].page++;
            if(d.result.total <= 0){//后面已经没有了
              self.classList[self.selected].finished = true;
            }

            if (d.status == 1) {



              if (!self.listValue[self.selected]) {

                self.listValue.push([]);

              }

              for (let i = 0; i < d.result.list.length; i++) {



                self.listValue[self.selected].push(d.result.list[i]);

              }

            } else {
              console.log('ajax列表获取不到数据，这里需要给一个错误提示');
            }
            console.log(self.listValue[self.selected]);
          },
          error: function(e) {
            self.classList[self.selected].error = true;

          }
        });
      },
      loadMoree() { //测试
        //console.log(selected);
        alert('aaa');
        var self = this;
        console.log(self.selected);
        this.classList[self.selected].loadingMoreStatus = true;
        console.log(this.loadingMoreStatus);

        $.ajax({
          url: "/app/index.php?i="+this.pageconfig.uniacid+"&c=entry&m=ewei_shopv2&do=mobile&r=live.list.get_list",
          type: "GET",
          data: {
            page: 1,
            cate: self.selected
          },
          dataType: "json",
          success: function(d) {
            console.log(d);

            self.classList[self.selected].loadingMoreStatus = false;

            if (d.status == 1) {

              console.log(self.listValue[self.selected]);

              if (!self.listValue[self.selected]) {

                self.listValue.push([]);

              }

              for (let i = 0; i < d.result.list.length; i++) {

                console.log(self.listValue[self.selected]);

                self.listValue[self.selected].push(d.result.list[i]);

              }

            } else {
              console.log('ajax列表获取不到数据，这里需要给一个错误提示');
            }
            console.log(self.listValue[self.selected]);
          }
        });
      },
      tolink: function(url){
         window.location.href=url;
      },
      onSearch: function(val){
        console.log(val);
        var self = this;

        self.classList[self.selected].loadingMoreStatus = true;
        console.log(self.classList[self.selected]);

        $.ajax({
          url: "/app/index.php?i="+this.pageconfig.uniacid+"&c=entry&m=ewei_shopv2&do=mobile&r=live.list.get_list_info",
          type: "GET",
          data: {
            page: 1,
            cate: self.selected,
            keywords: self.keywords
          },
          dataType: "json",
          success: function(d) {


            self.classList[self.selected].loadingMoreStatus = false;

            if(d.result.total <= 0){//后面已经没有了
              self.classList[self.selected].finished = true;
            }

            self.classList[self.selected].page++;

            if (d.status == 1) {


self.listValue[self.selected] = [];
              if (!self.listValue[self.selected]) {

                self.listValue.push([]);

              }

              for (let i = 0; i < d.result.list.length; i++) {



                self.listValue[self.selected].push(d.result.list[i]);

              }

            } else {
              console.log('ajax列表获取不到数据，这里需要给一个错误提示');
            }
            console.log(self.listValue[self.selected]);
          },
          error: function(e) {
            self.classList[self.selected].error = true;

          }
        });
      }


    }
  };
</script>
