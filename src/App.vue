<script setup>
import Cell from "./components/Cell.vue"
import TopView from "./components/TopView.vue"
import FontSize from './components/FontSize.vue'
</script>

<template>
  <div class="wrap">
    <div class="top-view">
      <TopView title="A" />
      <TopView title="B" />
      <FontSize />
    </div>
    <div class="cells-cont">
      <div v-for="i in 27" class="cell">
        <div v-for="j in 50" class="cell">
          <Cell :col="i" :row="j" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.cells-cont {
  display: grid;
  grid-template-columns: repeat(27, 1fr);
  grid-template-rows: auto;
}

.cell {
  position: relative;
  min-height: 30px;
}

.inp-wrap {
  position: relative;
  min-width: 120px !important;
  min-height: 30px !important;
  border: 1px solid #e2e2e6;
  border-left: none;
  border-top: none;
}

.inp {
  min-height: 29px;
  height: 100%;
  border: none;
  font-size: 16px;
  border-radius: 0;
  width: 100%;
  box-sizing: border-box;
}

.empty {
  height: 30px;
  width: 30px;
  border-right: 1px solid #5e6366;
}

.top {
  position: relative;
  border: none;
  min-width: 120px !important;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5e6366;
  background: #cbcccb;
  border: 1px solid #5e6366;
  border-top: none;
  border-left: none;
}

.left {
  color: #5e6366;
  position: relative;
  min-height: 30px !important;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
  border: 1px solid #5e6366;
  border-bottom: none;
  border-left: none;
}

.wrap {
  display: flex;
  flex-direction: column;
}

.top-view {
  display: flex;
  height: 100px;
  background: rgb(243, 151, 118);
  align-items: center;
  gap: 20px;
  padding-left: 30px;
  border-bottom: 1px solid #5e6366;
}
</style>
