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
      posx: 0
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
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 39 && this.inputVal === "") {
        if (c <= 50) r++;
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 37 && this.inputVal === "") {
        if (r > 0) r--;
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 40 && this.inputVal === "") {
        if (c < 50) c++;
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 38 && this.inputVal === "") {
        if (c > 0) c--;
        const element = cellsArr[r][c].firstChild
        element.focus()
      }
    },

    borderColor(event) {
      let element = cellsArr[this.col - 1][0]
      // let prevElement = cellsArr[this.col - 2][0]  
      // element.style.borderRight = '1px solid black'
      // prevElement.style.borderRight = '1px solid black'
    },
    checking(event) {
      let element = cellsArr[this.col - 1][0]
      let prevElement = -1
      if(this.col !== 1)
        prevElement = cellsArr[this.col - 2][0]
      this.posx = event.clientX - 31 - (121 * (this.col - 1))
      // console.log(this.posx)
      if (this.posx % 121 === 0)
        element.style.borderLeft = '3px solid blue'
      else 
        element.style.borderLeft = '1px solid black'
    },

    resize(event) {
      console.log(this.posx)
      // for (let i = 0; i < 50; i++) {
      //   let element = cellsArr[this.col - 1][i]
      //   // if (i === 0)
      //     element.style.width = '200px'
      //   // else
      //   //   element.style.width = '196px'
      // }
    }
  },
  mounted() {
    cellsArr[this.col - 1][this.row - 1] = this.$refs.ipcell;
  },
};
</script>

<template>
  <div v-if="row !== 1 && col !== 1" class="inp-wrap" ref="ipcell">
    <input ref="ipcell" class="inp" v-model="inputVal" @keydown="handleKeyDown" />
  </div>
  <div v-else-if="row === 1 && col === 1" class="empty" ref="ipcell"></div>
  <div v-else-if="row === 1 && col !== 1" ref="ipcell" class="top" @mousedown="resize" @mousemove="checking"
    @mouseleave="borderColor">
    {{ String.fromCharCode(col - 1 + 64) }}
  </div>
  <div v-else-if="col === 1 && row !== 1" ref="ipcell" class="left">
    {{ row - 1 }}
  </div>
</template>
