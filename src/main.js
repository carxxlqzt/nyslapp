import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CarouselPlugin } from 'bootstrap-vue'
import firebase from 'firebase/app'
Vue.use(CarouselPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyB5Hjl05WvQHj7cHxQOiuHvRNfSBdcwbSY",
  authDomain: "nysl-school.firebaseapp.com",
  databaseURL: "https://nysl-school.firebaseio.com",
  projectId: "nysl-school",
  storageBucket: "nysl-school.appspot.com",
  messagingSenderId: "707714510527",
  appId: "1:707714510527:web:5e30eeec8974bb8a77a00a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
