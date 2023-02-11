<script setup>
import Cell from "./components/Cell.vue";
import TopView from "./components/TopView.vue";
</script>

<template>
  <div class="wrap">
    <TopView />
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
  height: 30px;
}

.inp-wrap {
  position: relative;
  width: 120px;
  height: 30px;
  border: 1px solid black;
  border-right: none;
}

.inp {
  border: none;
  font-size: 17px;
  border-radius: 0;
  width: 100%;
  height: 29px;
  box-sizing: border-box;
}

.empty {
  height: 30px;
  width: 30px;
}

.top {
  position: relative;
  border: none;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
  width: 120px;
  border: 1px solid black;
  border-top: none;
  border-right: none;
}

.left {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
  border: 1px solid black;
  border-left: none;
  border-right: none;
}

.wrap {
  display: flex;
  flex-direction: column;
}
</style>
