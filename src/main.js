import Vue from 'vue'
import App from './App.vue'
import 'carbon-components/css/carbon-components.css'
import CarbonComponentsVue from '@carbon/vue';
import router from './router';
import './styles/cew_styles.css';

Vue.config.productionTip = false


Vue.use(CarbonComponentsVue);

new Vue({router,
  render: h => h(App),
}).$mount('#app')
