<script>
import { cellsArr } from "../state"
import { store } from '../store'
export default {
  props: {
    col: Number,
    row: Number,
  },
  data() {
    return {
      store,
      inputVal: "",
      focused: false,
      onBar: false,
      currCol: null,
      pageX: null,
      currColWidth: null,
      colMap: this.col,
      pressed: false,
      minWidth: 121,
      color: store.selectedColor
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

    mouseOver(e) {
      this.onBar = true
    },

    mouseOut(e) {
      this.onBar = false
    },

    mouseDown(e) {
      this.currCol = e.target.parentElement
      this.pageX = e.pageX
      this.currColWidth = this.currCol.offsetWidth
      this.pressed = true
    },

    mouseMove(e) {
      if (this.currCol !== null && this.pressed) {
        let diffX = e.pageX - this.pageX
        if(this.currColWidth >= this.minWidth && diffX > 0) {
          this.currCol.style.width = this.currColWidth + diffX + 'px'
          for (let i = 1; i < 50; i++) {
            const element = cellsArr[this.colMap - 1][i]
            element.style.width = this.currColWidth + diffX + 'px'
          }
        }
      }
    },

    mouseUp(e) {
      this.currCol = null
      this.pageX = null
      this.currColWidth = null
      this.pressed = false
    },

    onFocus(e) {
      this.focused = true
      this.$refs.sipcell.style.color = store.selectedColor
    },

    onBlur(e)  {
      this.focused = false
    }
  },
  mounted() {
    cellsArr[this.col - 1][this.row - 1] = this.$refs.ipcell
    if (this.row - 1 === 0 && this.col - 1 !== 0) {
      this.$refs.rez.addEventListener('mouseover', this.mouseOver)
      this.$refs.rez.addEventListener('mouseout', this.mouseOut)
      this.$refs.rez.addEventListener('mousedown', this.mouseDown)
      document.addEventListener('mousemove', this.mouseMove)
      document.addEventListener('mouseup', this.mouseUp)
    } else if(this.col - 1 !== 0) {
      this.$refs.sipcell.addEventListener("focus", this.onFocus)
      this.$refs.sipcell.addEventListener("blur", this.onBlur);
    }
  },
};
</script>

<template>
  <div v-if="row !== 1 && col !== 1" class="inp-wrap" ref="ipcell">
    <input ref="sipcell" class="inp" v-model="inputVal" @keydown="handleKeyDown" />
  </div>
  <div v-else-if="row === 1 && col === 1" class="empty" ref="ipcell"></div>
  <div v-else-if="row === 1 && col !== 1" ref="ipcell" class="top">
    {{ String.fromCharCode(col - 1 + 64) }}
    <div ref="rez" :class="{ active: onBar }" class="rez-bar"></div>
  </div>
  <div v-else-if="col === 1 && row !== 1" ref="ipcell" class="left">
    {{ row - 1 }}
  </div>
</template>

<style>
.rez-bar {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  cursor: col-resize;
  width: 5px;
}

.active {
  border-right: 3px solid rgb(57, 131, 235);
}
</style>
