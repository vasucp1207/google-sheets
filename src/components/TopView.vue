<template>
  <div class="topview">
      <span class="picker">A<pick-colors class="color" v-model:value="value" show-alpha @change="onColorChange" /></span>
  </div>
</template>

<script>
import { store } from '../store'
import { defineComponent, ref } from 'vue'
import PickColors from 'vue-pick-colors'

export default defineComponent({
  name: 'App',
  components: {
    PickColors
  },
  setup() {
    const value = ref('#000000FF')
    const onColorChange = (value, color, index) => {
      store.selectedColor = value
      // console.log(store.selectedColor)
    }
    return {
      value,
      onColorChange
    }
  },
  data() {
    return {
      store
    }
  }
})
</script>

<style>
.topview {
  height: 100px;
  background: rgb(243, 151, 118);
}
.picker {
  margin-left: 50px;
  position: relative;
  font-size: 20px;
}
.color {
  position: absolute;
  left: -65%;
  top: 70%;
}
.color-item {
  height: 5px !important;
  border: none !important;
  cursor: pointer;
}
</style>