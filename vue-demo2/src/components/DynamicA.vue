<template>
  <h3>动态组件A</h3>
  <p>{{ msg }}</p>
  <button @click="chageData">改变数据</button>
</template>

<script>
  export default {
    beforeUnmount(){
      console.log("卸载组件A之前");
    },
    unmounted(){
      console.log("组件A被卸载后");
    },
    data() {
      return {
        msg: "老数据"
      }
    },
    methods: {
      chageData(){
        this.msg = "新数据"
      }
    }
  }
</script>