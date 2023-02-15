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
      onRowBar: false,
      currCol: null,
      currRow: null,
      pageX: null,
      pageY: null,
      currColWidth: null,
      currRowHeight: null,
      colMap: this.col,
      rowMap: this.row,
      pressed: false,
      minWidth: 121,
      minHeight: 30,
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
        if (c < 26) r++;
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 37 && this.inputVal === "") {
        if (r > 1) r--;
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 40 && this.inputVal === "") {
        if (c < 49) c++;
        const element = cellsArr[r][c].firstChild
        element.focus()
      } else if (event.keyCode === 38 && this.inputVal === "") {
        if (c > 1) c--;
        const element = cellsArr[r][c].firstChild
        element.focus()
      }
    },

    mouseOver(e) {
      if (this.rowMap - 1 == 0) this.onBar = true
      else this.onRowBar = true
    },

    mouseOut(e) {
      this.onBar = false
      this.onRowBar = false
    },

    mouseDown(e) {
      if (this.onBar) {
        this.currCol = e.target.parentElement
        this.pageX = e.pageX
        this.currColWidth = this.currCol.offsetWidth
        this.pressed = true
      }
      if (this.onRowBar) {
        this.pageY = e.pageY
        this.currRow = e.target.parentElement
        this.currRowHeight = this.currRow.offsetHeight
        this.pressed = true
      }
    },

    mouseMove(e) {
      if (this.currCol !== null && this.pressed) {
        let diffX = e.pageX - this.pageX
        this.currCol.style.width = this.currColWidth + diffX + 'px'
        for (let i = 1; i < 50; i++) {
          const element = cellsArr[this.colMap - 1][i]
          element.style.width = this.currColWidth + diffX + 'px'
        }
      }

      else if (this.currRow !== null && this.pressed) {
        let diffY = e.pageY - this.pageY
        for (let i = 0; i <= 26; i++) {
          const element = cellsArr[i][this.rowMap - 1]
          element.style.height = this.currRowHeight + diffY + 'px'
        }
      }
    },

    mouseUp(e) {
      this.currCol = null
      this.pageX = null
      this.pageY = null
      this.currColWidth = null
      this.pressed = false
      this.currRow = null
      this.currRowHeight = null
    },

    onFocus(e) {
      this.focused = true
      this.$refs.sipcell.style.color = store.selectedColor
      if (store.selectedBackground !== '#FFFFFFFF')
        this.$refs.sipcell.style.background = store.selectedBackground
      if (store.fontSize !== 16 && this.$refs.sipcell.offsetHeight > 2 * store.fontSize)
        this.$refs.sipcell.style.fontSize = store.fontSize + 'px'
    },

    onBlur(e) {
      this.focused = false
      store.selectedBackground = '#FFFFFFFF'
      store.fontSize = 16
    }
  },
  mounted() {
    cellsArr[this.col - 1][this.row - 1] = this.$refs.ipcell
    if (this.row - 1 !== 0 && this.col - 1 === 0) {
      this.$refs.rez2.addEventListener('mouseover', this.mouseOver)
      this.$refs.rez2.addEventListener('mouseout', this.mouseOut)
      this.$refs.rez2.addEventListener('mousedown', this.mouseDown)
      document.addEventListener('mousemove', this.mouseMove)
      document.addEventListener('mouseup', this.mouseUp)
    }
    if (this.row - 1 === 0 && this.col - 1 !== 0) {
      this.$refs.rez.addEventListener('mouseover', this.mouseOver)
      this.$refs.rez.addEventListener('mouseout', this.mouseOut)
      this.$refs.rez.addEventListener('mousedown', this.mouseDown)
      document.addEventListener('mousemove', this.mouseMove)
      document.addEventListener('mouseup', this.mouseUp)
    } else if (this.col - 1 !== 0 && this.row - 1 !== 0) {
      this.$refs.sipcell.addEventListener("focus", this.onFocus)
      this.$refs.sipcell.addEventListener("blur", this.onBlur)
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
    <div ref="rez2" :class="{ active2: onRowBar }" class="rez2-bar"></div>
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

.rez2-bar {
  position: absolute;
  bottom: 0;
  height: 5px;
  cursor: row-resize;
  width: 100%;
}

.active {
  border-right: 3px solid rgb(57, 131, 235);
}

.active2 {
  border-bottom: 4px solid rgb(57, 131, 235);
}
</style>
