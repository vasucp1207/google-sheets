<script setup>
import Cell from "./components/Cell.vue";
import Number from "./components/Number.vue";
import Top from "./components/Top.vue";
</script>

<template>
  <div class="wrap">
    <Number />
    <div>
      <Top />
      <div class="cells-cont">
        <div v-for="i in 100" class="cell">
          <Cell :idx="i" />
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
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
}

.cell {
  height: 35px;
}
.inp {
  border-color: #cbcccb;
  font-size: 17px;
  border-left: none;
  border-top: none;
  border-radius: 0;
  height: 31px;
}

.wrap {
  display: flex;
}
</style>
