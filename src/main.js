import Vue from 'vue'
import App from './App.vue'
import questionCard from './components/questionCard'
import ansCheck from './components/ansCheck'
import header from './components/header'


Vue.component('app-question-card',questionCard);
Vue.component('app-ans-check',ansCheck);
Vue.component('app-header',header);



new Vue({
  el: '#app',
  render: h => h(App)
})
