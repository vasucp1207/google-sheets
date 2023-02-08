<template>
  <div class="top-cont">
    <div class="top-cell">A</div>
    <div class="top-cell">B</div>
    <div class="top-cell">C</div>
    <div class="top-cell">D</div>
    <div class="top-cell">E</div>
    <div class="top-cell">F</div>
    <div class="top-cell">G</div>
  </div>
</template>

<style>
.top-cont {
  border-bottom: 2px solid #cbcccb;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.top-cell {
  height: 35px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
