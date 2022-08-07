import {createApp} from 'vue';
import App from '/@/App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-green/theme.css';       //theme.css'
import 'primevue/resources/primevue.min.css';   	//required: PrimeVue components
import 'primeicons/primeicons.css';	 				//required: PrimeIcons
import 'primeflex/primeflex.scss';

// import "./App.scss"; 	                            //your styles and overrides
const app = createApp(App);
  app.use(PrimeVue, {ripple: true});
  app.use(router);
  app.mount('#app');

