<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
    }
  }, 
  methods: {
    changeFont(e) {
      console.log(store.fontSize)
    }
  }
}
</script>

<template>
  <select v-model="store.fontSize" class="font-cont">
    <option v-for="i in 14">{{ (i + 6) + i }}</option>
  </select>
</template>

<style>
.font-cont {
  margin-left: 20px;
  width: 60px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background: transparent;
}
</style>