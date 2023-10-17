<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green" />
    <!-- This could be reused like this -->
    <!-- <Button text="Update Task" color="blue" /> -->
    <!-- <Button text="Delete Task" color="red" /> -->
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    title: String,
  },
  //   There are 2 other ways to receive props from the parent component.
  //   1. props: ['title']
  //   2. props: {
  //     title: {
  //         type: String,
  //         default: 'Hello World'
  //     }
  // }
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
