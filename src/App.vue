<template>
	<div id="app">

		<header class="mint-header is-fixed" v-if="$route.meta.headershow!==false" style="display:none; background: rgb(253, 123, 39);height: 46px; z-index: 99999;">
		</header>


		<router-view v-if="(wxEnvironment && $store.state.weixinPage && loadedQlgh) || (!wxEnvironment && loadedQlgh)"></router-view>

	</div>
</template>
<script>
var backButtonPress = null;
import statistic from './routerconfig/statistic'


	export default {
		name: 'app',
		data() {
			return {
        wxurl: "/app/index.php?i=" + this.pageconfig.uniacid + "&c=auth&a=actforward&forward=",
				inspect:false ,
				statistic:statistic,
        wxEnvironment: false,
        loadedQlgh: false,
        locationing: false,
			}
		},
		computed: {
/* 			popupVisible: {
				get() {
					return this.$store.state.popupVisible
				},
				set(value) {
					this.$store.commit('updatePopupVisible', value)
				}
			},
			shares() {
				return this.$store.state.shares
			},
     shareConfig(){
       return this.$store.state.shareDetail
     } */
		},
		created(){
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        //loadingType: 'spinner',
        duration: 0
      });
/*      if(this.$route.name == 'chatinformation' ){
        this.$router.replace('/');
      } */
      if(this.$commonfunc.common.isWeiXin()){
        this.wxEnvironment = true;
      }

      this.systemInit();
      this.shareInit();

/* (function(doc, win) {
	var docEl = doc.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function() {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        if (clientWidth == 640) {
	            docEl.style.fontSize = '20px';
	        } else {
	            docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
	        }
	    };
	  console.log(resizeEvt);
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window); */
		},
		watch: {
			$route(newVal,oldVal){



			}
		},
		mounted() {
			//var self = this;

/* 			window.JumpPage = function(obj) {
				self.$router.push(obj)
				plus.webview.getWebviewById('blank').close();
			} */


		},
		methods: {

      async systemInit(){
         //alert(1);
         await this.wxRefStatus();
        console.log('ddddddddddd');
         //alert(a);
         //console.log('self.locationing',self.locationing);
         if((this.wxEnvironment && this.$store.state.weixinPage) || !this.wxEnvironment){

            await this.$store.dispatch('getQighUser');
            console.log(6);
           let qlghstatus = await this.$commonfunc.qlgh.verifyuserinfo(this.$store.state.qlghUser);

           if(!qlghstatus.status && qlghstatus.content != ""){
             //this.$toast(qlghstatus.content);
             this.userErrMsg = qlghstatus.content;
             //return false;
           }
      /*     if(!this.wxEnvironment){
           } */
           //let self = this;
           console.log(this.wxEnvironment);
           console.log(this.$store.state.qlghUser.error);

           if(((!this.wxEnvironment && !this.$store.state.qlghUser.error) || (this.wxEnvironment && this.$store.state.qlghUser.error)) && qlghstatus.status && !qlghstatus.content){


/*             await this.$store.dispatch('getUserInfo')
             .then((v) =>{

               if (v.status == 1) {

               } else {

               }
             })
             .catch((e) => {

             }); */
           }else{
             this.$store.commit('updateErrEnv');
   /*          this.$notify({
               message: this.userErrMsg,
               duration: 0,
               type: 'primary',
             }); */
             //alert(this.$route.name);
/*             if(this.$route.name != 'homepage' && this.$route.name != 'information' && this.$route.name != 'personInfo'){
               this.$router.replace('/');
             } */
           }

           this.loadedQlgh = true;
           this.$toast.clear();
         }
       },
       wxRefStatus(){
       return new Promise((resolve, reject)=>{
         let self = this;
         //setTimeout(function(){


           let wxurl = self.$commonfunc.config.zb.wxurl;
           var weixinPage = self.$store.state.weixinPage;
           var wxref =  self.$route.query.wxref;
     //console.log(wxref);
           if(this.wxEnvironment && wxref){

             self.$store.commit('setWeixinPage');
             weixinPage = true;
           }
          // console.log(weixinPage);

           if(this.wxEnvironment && !weixinPage){
             //console.log(wxurl + window.location.href);
             //http://rzweixin.zb12351.com/app/&i=7&wxref=mp.weixin.qq.com
             //self.locationing = true;
             console.log("授权链接",wxurl + encodeURIComponent(window.location.href));
             //self.$router.replace(wxurl + encodeURIComponent(window.location.href));
             //history.pushState(null, 'page 2', wxurl + encodeURIComponent(window.location.href));
             window.location.replace(wxurl + encodeURIComponent(window.location.href));
             //window.location.replace =  wxurl + encodeURIComponent(window.location.href);

           }else{
           }
           console.log(11111111111111);
           resolve(true);
           //return true;
         //},5000);
       });
      },
      shareInit(){
        var self = this;
        let shareUrl = location.href.split('#')[0];


        $.ajax({
        	url:"/mapi/shareConfig.php",
        	type: "get",
        	async:false,
        	data: {
        		url: shareUrl
        	},
        	dataType: "json",
        	success: function(c){


          //var test = wxSdk.then((c) => {
            // 请求成功的结果
            console.log(c);
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: self.pageconfig.appid, // 必填，公众号的唯一标识
                timestamp: c.timestamp, // 必填，生成签名的时间戳
                nonceStr: c.nonceStr, // 必填，生成签名的随机串
                signature: c.signature,// 必填，签名，见附录1
                jsApiList: [
                  'onMenuShareAppMessage',
                  'onMenuShareTimeline',
                  'onMenuShareQQ'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });



            wxApi.shareReady();
           // }

              //return ret;
          },
          error: function(e){

          }
        });
        //});
        //console.log("分享");
       // console.log(test);
      },

		  //  checkArguments(){// 判断启动方式//从分享出去的网页里启动app
			//    console.log("plus.runtime.launcher: "+plus.runtime.launcher);
			 //   var args= plus.runtime.arguments;
			//    if(args){
			        // 处理args参数，如打开新页面等
			//        console.log(args)			    }
			//},
		}

	}
</script>

<style>
  body{
        font: 14px "微软雅黑";
        background: #f7f7f7;
        margin: 0px;
  }

	.multloginbutton {
		border-radius: 50%;
		height: 50px;
		width: 50px;
		margin: 20px
	}

	td>p {
		margin-top: 3px;
	}

	.share {
		text-align: center;
		padding: 6x;
	}

	.share img {
		width: 11%;
		margin: 15px;
	}
	.mint-msgbox-message{
		text-align: left;
	}
	.mint-header-button *{
		-webkit-touch-callout:none;
		-webkit-user-select:none;
		-khtml-user-select:none;
		-moz-user-select:none;
		-ms-user-select:none;
		user-select:none;
	}

</style>
