<script>
import { inputArr } from "../state";
export default {
  props: {
    idx: Number,
  },
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    handleKeyDown(event) {
      if (event.key === "Enter") {
        this.$refs.ipcell.blur();
      }
      if (event.keyCode === 39 || event.key === "ArrowDown") {
        const num = inputArr.indexOf(this.$refs.ipcell);
        if (num !== inputArr.length - 1)
          inputArr[num + 1].focus() % inputArr.length;
      }
      if (event.keyCode === 37 || event.key === "ArrowUp") {
        const num = inputArr.indexOf(this.$refs.ipcell);
        if (num !== 0) inputArr[num - 1].focus() % inputArr.length;
      }
    },
  },
  mounted() {
    inputArr.push(this.$refs.ipcell);
  },
};
</script>

<template>
  <input
    :key="idx"
    ref="ipcell"
    class="inp"
    v-model="inputVal"
    @keydown="handleKeyDown"
  />
</template>

<style></style>
