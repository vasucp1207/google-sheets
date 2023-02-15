<script>
import { store } from '../store'
import { defineComponent, ref } from 'vue'
import PickColors from 'vue-pick-colors'

export default defineComponent({
  name: 'App',
  components: {
    PickColors
  },

  props: {
    title: String
  },

  setup(props) {
    const value = ref('#000000FF')
    store.selectedBackground = '#FFFFFFFF'
    const onColorChange = (value, color, index) => {
      if (props.title === 'A') { store.selectedColor = value }
      else { store.selectedBackground = value }
      // console.log(store.selectedBackground)
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

<template>
  <div>
    <span class="picker">{{ this.title }}<pick-colors class="color" v-model:value="value" show-alpha
        @change="onColorChange" /></span>
  </div>
</template>


<style>
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