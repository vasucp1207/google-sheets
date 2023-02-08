<script>
export default {
    data() {
        return {
            inputVal: ''
        }
    },
    methods: {
        handleKeyDown(event) {
            if(event.key === 'Enter') {
                this.$refs.ipcell.blur()
            }
        }
    },
    watch: {
        inputVal(newVal) {
            // console.log(newVal)
        }
    }
}
</script>

<template>
    <input ref="ipcell" class="inp" v-model="inputVal" @keydown="handleKeyDown" />
</template>