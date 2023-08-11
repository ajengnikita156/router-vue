import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createStore } from "vuex";
import store from "./store/index";
import todos from "./store/todos";
const app = createApp(App);

app.use(store);
app.use(todos);
app.use(router).mount("#app");