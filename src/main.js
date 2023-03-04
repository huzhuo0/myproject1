import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus, { POPPER_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import './assets/style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' /* 引入element-plus图标 */
import OuterCard from './components/card/OuterCard.vue'
import InnerCard from './components/card/InnerCard.vue'
// import { jsSeamlessScroll, cssSeamlessScroll} from 'vue-seamless-scroll/src'

import setAxios from './axios'
// import './assets/style/index.scss'
// import './utils/filter.js'
setAxios() /* 这样我们设置的axios就生效了 */

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
app.use(router)
app.use(ElementPlus)
// app.use(jsSeamlessScroll)
// app.use(cssSeamlessScroll)
app.component('OuterCard', OuterCard)
app.component('InnerCard', InnerCard)
app.config.globalProperties.$axios = axios
app.mount('#app')

// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
