import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import router from './router';
import moment from 'moment';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$moment = moment;

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')