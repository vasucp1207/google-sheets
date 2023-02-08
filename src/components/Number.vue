<template>
    <div class="cont-wrap">
        <div class="num-cont">
            <span v-for="i in 20">
                {{ i }}
            </span>
        </div>
    </div>
</template>

<style>
.num-cont {
    border-right: 2px solid #cbcccb;
    display: flex;
    flex-direction: column;
    background: #eee;
}

.cont-wrap {
    background: #eee;
}

.num-cont:nth-child(1) {
    margin-top: 35px;
}

.top-span {
    width: 30px;
    height: 35px;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    height: 35px;
    width: 30px;
}
</style>