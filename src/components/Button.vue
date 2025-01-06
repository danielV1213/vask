<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button"
    },
    color: {
      type: String,
      default: "steelblue"
    }
  },
  methods: {
    onClick() {
      console.log("Click");
    },
  },
};
</script>
