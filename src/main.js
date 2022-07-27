import { createApp } from "vue"

import App from "./App.vue"
import { router } from "./routes"

import "virtual:windi.css"
import "@/css/global.css"

const app = createApp(App)

app.use(router)
app.mount("#app")
