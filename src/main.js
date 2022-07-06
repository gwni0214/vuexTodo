import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import { store } from "./store/store.js";

import todoHeader from './pages/todoHeader.vue';
import todoInput from './pages/todoInput.vue';
import todoList from './pages/todoList.vue';
import todoFooter from './pages/todoFooter.vue';
import ToastPop from './components/ToastPop.vue';
import ModalPop from './components/ModalPop.vue';
import todoSearch from './pages/todoSearch.vue';

Vue.config.productionTip = false

//전역 컴포넌트 설정
Vue.component('todoHeader', todoHeader);
Vue.component('todoInput', todoInput);
Vue.component('todoList', todoList);
Vue.component('todoFooter', todoFooter);
Vue.component('ToastPop', ToastPop);
Vue.component('ModalPop', ModalPop);
Vue.component('todoSearch', todoSearch);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
