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
    createChildDiv(height) {
      let div = document.createElement('div')
      div.style.top = 0
      div.style.right = 0
      div.style.width = '5px'
      div.style.position = 'absolute'
      div.style.cursor = 'col-resize'
      div.style.height = height + 'px'
      return div
    },
    setEventListners(div) {
      let currCol, pageX, currColWidth
      let colMap = this.col

      div.addEventListener('mousedown', function (e) {
        currCol = e.target.parentElement
        pageX = e.pageX
        currColWidth = currCol.offsetWidth
      })
      
      div.addEventListener('mouseover', function (e) {
        e.target.style.borderRight = '3px solid red'
      })

      div.addEventListener('mouseout', function (e) {
        e.target.style.borderRight = ''
      })

      document.addEventListener('mouseup', function (e) {
        currCol = undefined
        pageX = undefined
        currColWidth = undefined
      })

      div.addEventListener('mousemove', function (e) {
        if (currCol) {
          let diffX = e.pageX - pageX
          currCol.style.width = currColWidth + diffX + 'px'
          for(let i = 1; i < 50; i++) {
            const element = cellsArr[colMap - 1][i]
            element.style.width = currColWidth + diffX + 'px'
          }
        }
      })
    }
  },
  mounted() {
    cellsArr[this.col - 1][this.row - 1] = this.$refs.ipcell
    if (this.row - 1 === 0 && this.col - 1 !== 0) {
      this.$refs.ipcell.position = 'relative'
      let div = this.createChildDiv(this.$refs.ipcell.offsetHeight)
      this.$refs.ipcell.appendChild(div)

      this.setEventListners(div)
    }
  },
};
</script>

<template>
  <div v-if="row !== 1 && col !== 1" class="inp-wrap" ref="ipcell">
    <input ref="ipcell" class="inp" v-model="inputVal" @keydown="handleKeyDown" />
  </div>
  <div v-else-if="row === 1 && col === 1" class="empty" ref="ipcell"></div>
  <div v-else-if="row === 1 && col !== 1" ref="ipcell" class="top">
    {{ String.fromCharCode(col - 1 + 64) }}
  </div>
  <div v-else-if="col === 1 && row !== 1" ref="ipcell" class="left">
    {{ row - 1 }}
  </div>
</template>
