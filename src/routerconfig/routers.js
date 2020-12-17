import home from '../components/home'
import homepage from '../components/homepage'
import LiveRoom from '../components/LiveRoom'
/* import activity from 'components/activity'
import integral from 'components/integral'
import mine from 'components/mine' */

let routers = [{
		path: '/',
		component: home,
		meta: {
			requiresAuth: true,
			title: '首页'
		},
		children: [{
			path: '/',
			component: homepage,
			name: 'homepage',
			meta: {
				title: "首页",
				backShow: false
			}
		}, {
      path: '/LiveRoom/:uniacid/:id',
      name: 'liveroom',
      component: LiveRoom,
      meta: {
        title: "直播间",
      }
    }]
	}
]

export default routers;
