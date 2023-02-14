import { reactive, watch } from "vue"
import { cellsArr } from "./state"

export const store = reactive({
  selectedColor: '#000000FF'
})

watch(() => store.selectedColor, (newValue, oldValue) => {
  let r, c
  for (let i = 0; i < cellsArr.length; i++) {
    for (let j = 0; j < cellsArr[i].length; j++) {
      if (cellsArr[i][j].focus()) {
        r = i;
        c = j;
      }
    }
  }
  console.log(r, " ", c)
})