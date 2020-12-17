import common from '../js/common'
const state = {
  popupVisible:false,
  shareDetail:{
  	href:'',
		title:'',
		content:"",
		thumbs:[""],
		pictures:[""],
		contentType:0,
		detailId:0
  },
  shares:'',//分享服务列表
  huodongActionOnce: false,//确保路由切换后活动第一页只加载一次
  weixinPage: false,
  qlghUser: null,
  noEntry: false,
  errEnv: true
 }
const mutations= {
  updatePopupVisible(state,popupVisible){
    state.popupVisible=popupVisible
  },
  updateShareDetail(state,shareDetail){
    state.shareDetail=shareDetail

  },
  updateShares(state,shares){
    state.shares=shares
  },
  updatehuodongActionOnce(state,shares){
    state.huodongActionOnce=true;
  },
  updateErrEnv(state){
    state.errEnv = false;
  },
  setWeixinPage(state) {
    state.weixinPage = true;
    console.log(state.weixinPage);
  },


}
const actions = {
  async getQighUser() {

    return new Promise(async (resolve,reject) => {
//alert(1);
      let self = this;
//setTimeout(function(){


      if (!state.qlghUser) {
        console.log(1);
        state.qlghUser = await self._vm.$commonfunc.qlgh.initQlgh();
        console.log(2);
        //return true;

      }
      console.log(3);
      //console.log(2222222222);
      resolve(true);
      //},5000);
    });

  },
}
export default {
  state,
  mutations,
  actions
}
