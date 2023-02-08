<script>
import { cellsArr } from "../state";
export default {
  props: {
    col: Number,
    row: Number,
  },
  data() {
    return {
      inputVal: "",
      done: false,
    };
  },
  methods: {
    handleKeyDown(event) {
      let r = -1,
        c = -1;
      for (let i = 0; i < cellsArr.length; i++) {
        for (let j = 0; j < cellsArr[i].length; j++) {
          if (cellsArr[i][j] === this.$refs.ipcell) {
            r = i;
            c = j;
          }
        }
      }

      if (event.key === "Enter") {
        if (r < 26) r++;
        cellsArr[r][c].focus();
      } else if (event.keyCode === 39 && this.inputVal === "") {
        if (c <= 50) r++;
        cellsArr[r][c].focus();
      } else if (event.keyCode === 37 && this.inputVal === "") {
        if (r > 0) r--;
        cellsArr[r][c].focus();
      } else if (event.keyCode === 40 && this.inputVal === "") {
        if (c < 50) c++;
        cellsArr[r][c].focus();
      } else if (event.keyCode === 38 && this.inputVal === "") {
        if (c > 0) c--;
        cellsArr[r][c].focus();
      }
    },
  },
  mounted() {
    cellsArr[this.col - 1][this.row - 1] = this.$refs.ipcell;
  },
};
</script>

<template>
  <input
    v-if="row !== 1 && col !== 1"
    ref="ipcell"
    class="inp"
    v-model="inputVal"
    @keydown="handleKeyDown"
  />
  <div v-else-if="row === 1 && col === 1" class="empty" ref="ipcell"></div>
  <div v-else-if="row === 1 && col !== 1" ref="ipcell" class="top">
    {{ String.fromCharCode(col - 1 + 64) }}
  </div>
  <div v-else-if="col === 1 && row !== 1" ref="ipcell" class="left">
    {{ row - 1 }}
  </div>
</template>

<style></style>
