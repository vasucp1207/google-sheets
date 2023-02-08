<script setup>
import Cell from "./components/Cell.vue";
</script>

<template>
  <div class="wrap">
    <div>
      <div class="cells-cont">
        <div v-for="i in 27" class="cell">
          <div v-for="j in 50" class="cell">
            <Cell :col="i" :row="j" />
          </div>
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
  height: 30px;
  border: 1px solid black;
  border-top: none;
  border-left: none;
  width: fit-content;
}
.inp {
  border: none;
  font-size: 17px;
  border-radius: 0;
  height: 28px;
  width: 116px;
}
.empty {
  height: 30px;
  width: 30px;
}
.top {
  border: none;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
  width: 120px;
}
.left {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbcccb;
}

.wrap {
  display: flex;
}
</style>
