<template>
  <div class="task">
    <div>
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
    <div>
      <button @click="this.deleteTask(task._id)" class="btn">Delete</button>
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
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn {
  display: flex;
  justify-content: center;
  background: rgb(218, 3, 3);
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  width: 80px;
  height: 40px;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
</style>
