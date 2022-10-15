import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.router.js'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import formkitTheme from './theme/formkit.lib'

createApp(App).use(router).use(plugin, defaultConfig({
    config: {
        classes: generateClasses(formkitTheme),
    },
})
).mount('#app')