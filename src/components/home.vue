<template>
  <div  id="appp" >
    		<!--<transition name="in-out-translate-fade"  style="margin-bottom:60px;" >-->
    			<keep-alive include="homepage">
		 	 			<router-view></router-view>
		 	 		</keep-alive>
  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      //selected:this.$route.name,

    }
  },
  watch:{
  	/* $route(){
      console.log(this.$route);
  		this.selected=this.$route.name
  	} */
  },
  created(){

	},

  methods:{
  /* 	goto(page){
  		if(page === 'mall'){


				let outURL =this.mui.mallUrl + 'i=3&c=entry&m=ewei_shopv2&do=mobile';

				if(!window.plus) {
	    			window.location.href = outURL;
				} else {
		  			this.$router.push({
								name: 'mall',
								params: {
									url: outURL
								}
						})
				}

  		} else {
  			this.$router.replace(page)
  		}
  	} */
  },

}
</script>

<style>
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
    color: #fd7b27;
}
 </style>
