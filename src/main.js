import { createApp } from "vue"

import App from "./App.vue"
import { router } from "./routes"
import { makeServer } from "./server"

import "virtual:windi.css"
import "@/css/global.css"

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  makeServer()
}

const app = createApp(App)

app.use(router)
app.mount("#app")
