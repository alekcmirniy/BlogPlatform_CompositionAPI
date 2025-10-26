import '@/main.scss';
import { createApp } from 'vue'
import { useHandleError } from './composables/useHandleError';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const { handleError } = useHandleError();
app.config.errorHandler = (err) => {
    handleError(err as Error);
}

app.mount('#app')