import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);
app.use(VueApexCharts);
app.use(MotionPlugin);
app.mount('#app');
