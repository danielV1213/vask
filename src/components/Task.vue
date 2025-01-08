<template>
  <div class="task">
    <div>
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
    <div>
      <button @click="this.deleteTask(task._id)">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    async deleteTask(taskId) {
      try {
        const API_URL = process.env.VUE_APP_API_URL;
        await axios.delete(`${API_URL}/tasks/${taskId}`)
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  }
};
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
