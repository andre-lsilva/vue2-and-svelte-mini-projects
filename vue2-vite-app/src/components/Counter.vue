<template>
  <div>
    <h1>This value was passed from the parent: <span>{{ msg }}</span></h1>
    <button @click="increment">Counter: {{ count }}</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped>
  h1 {
    color: #6f9b74;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 300;
  }

  span {
    color: black
  }
</style>