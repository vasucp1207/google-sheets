<script setup>
import Cell from "./components/Cell.vue";
import TopView from "./components/TopView.vue";
</script>

<template>
  <div class="wrap">
    <div class="top-view">
      <TopView title="A" />
      <TopView title="B" />
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
  border: 1px solid black;
  border-bottom: none;
  border-right: none;
}

.inp {
  min-height: 30px;
  border: none;
  font-size: 17px;
  border-radius: 0;
  width: 100%;
  /* height: 100%; */
  box-sizing: border-box;
}

.empty {
  height: 30px;
  width: 30px;
}

.top {
  position: relative;
  border: none;
  min-width: 120px !important;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
  border: 1px solid black;
  border-bottom: none;
  border-top: none;
  border-right: none;
}

.left {
  position: relative;
  min-height: 30px !important;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
  border: 1px solid black;
  border-bottom: none;
  border-left: none;
  border-right: none;
}

.wrap {
  display: flex;
  flex-direction: column;
}

.top-view {
  display: flex;
  height: 100px;
  background: rgb(243, 151, 118);
}
</style>
