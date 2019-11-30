import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as voicePromptFun from './utils/voicePrompt'  
Vue.prototype.voicePrompt = voicePromptFun.voicePrompt
Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
