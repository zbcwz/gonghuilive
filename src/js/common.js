import labor from 'labor';
export default {
    config: {
      zb:{
        uniacid : 1,
        websiteurl : "",
        wsurl : "",
        sharetitle: "",
        sharedesc: "",
        shareimgUrl: "",
        attachurl: "",
        appid: "",

        wxurl: "",
        preventInfo:''
      }
    },
    qlgh: {
      dislocation: 0000,
      initQlgh: async function() {
        //var user = {};
        //alert(labor);
        //console.log(labor);
        //var self = this;
        return new Promise(async (resolve,reject) => {
          //setTimeout(function(){


            let data;
            labor.getUserInfo(function(userInfo) { //获取用户登录信息先不跳转
              data = userInfo;
              labor.getLaborStatus(function(status) {
                data.laborStatus = status.laborStatus;
                resolve(data);
                //alert(JSON.stringify(user));
              });
              console.log(userInfo);
              //labor.openLogin();

              //console.log(userInfo);
              //alert(JSON.stringify(user));
            });
            //console.log(userInfo);
            //console.log(1111);
            /* 			setTimeout(function(){
                console.log(modal.qlghuser);

              },5000); */

            //console.log(222);
            //console.log(modal.qlghuser);
         /*   if (data.error) {
              data = {};
            } */


            //modal.qlghuser = user;

               /* setTimeout(function(){
                  console.log(modal.qlghuser);

                },5000); */
            //alert(modal.qlghuser);


            //return data;
          //},5000);
        });
      },
      verifyuserinfo: function(user){
        console.log(user);
        console.log(7);
        if(this.isWeiXin()){
          return {
            status: true
          };
        }
        //user.serialNum = "";
        if(user.error){

          return {
             content: "请到齐鲁工惠APP或日照职工e家微信公众号参与活动",
             status: false
          }

        }
        //return false;
          //如果加积分就开
    /* 		if(!user.serialNum){

          //alert("活动编号错误");
          layer.open({
            content: "活动编号错误"
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
          });

      
          return false;
        } */

        if(user.userId == -1){
      //alert(JSON.stringify(user));

          labor.openLogin();
          return {
           content: "",
           status: false
          }
        }


        var sheng = user.districtCode.substr(0,4);

     		if(sheng != this.dislocation){

 /*         return {
            content: "本活动仅限已下载“齐鲁工惠”手机APP并完成实名认证的日照市工会会员参加!",
            status: false
          } */
        }

     		if(user.laborStatus <= 0 || user.laborStatus >= 5){

/*          return {
            content: "您的账号" +user.userPhone+ "会员状态异常",
            status: false
          } */
        }

        return {
          content: "",
          status: true
        }
      },
      isWeiXin: function() {
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
              return true; // 是微信端
          } else {
              return false;
          }
      }
    },
    common: {
      isWeiXin: function() {
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
              return true; // 是微信端
          } else {
              return false;
          }
      }
    }
  }
