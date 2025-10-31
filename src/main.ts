import '@/styles/main.scss';
import { createApp } from 'vue'
import { useHandleError } from './composables/useHandleError';
import ErrorWindow from './components/ErrorWindow.vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const { handleError } = useHandleError();
app.config.errorHandler = (err) => handleError(err as Error);

const errorApp = createApp(ErrorWindow);
const div = document.createElement('div');
document.body.appendChild(div);
errorApp.mount(div);

app.mount('#app')