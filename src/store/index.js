import { createStore } from "vuex";

export const tasksStore = createStore({
  state() {
    return {
      isTaskDeleted: false,
      taskDeleted: "",
    };
  },

  mutations: {
    setTaskDeleted(state, data) {
      state.taskDeleted = data;
    },
    setIsTaskDeleted(state, data) {
      state.isTaskDeleted = data;
    },
  },
});
