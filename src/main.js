import { createApp } from "vue";
import { tasksStore } from "./store";
import App from "./App.vue";

// Create the app instance
const app = createApp(App);

// Use the store with the app instance
app.use(tasksStore);

// Mount the app
app.mount("#app");
