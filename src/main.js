import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADpfevxbSF5OoPnV10q0EOHOJ1MUfh6d8",
  authDomain: "week7-fengying.firebaseapp.com",
  projectId: "week7-fengying",
  storageBucket: "week7-fengying.appspot.com",
  messagingSenderId: "137642033434",
  appId: "1:137642033434:web:0af1beff059ef1e5c5aca3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
app.mount('#app')
