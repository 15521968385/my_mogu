import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'


import 'vant/lib/index.css';
import { Icon,Search,Swipe,SwipeItem,Lazyload,Button,Loading,Tab,Tabs,Popup,Cell,CellGroup,Sidebar,SidebarItem } from 'vant';
Vue.use(Icon);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Sidebar);
Vue.use(SidebarItem);

//事件总线eventbus,实现兄弟组件传值
export const eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
