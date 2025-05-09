<template>
  <h3>侦听器</h3>
  <p>{{ msg }}</p>
  <button @click="updateHandle">修改数据</button>
</template>

<script>
  export default {
    data() {
      // 监听return中的数据
      return {
        msg: "Hello World!"
      }
    },
    methods: {
      updateHandle(){
        this.msg = "Hello Vue!"
      }
    },
    // 监听气的函数名称与其监听的数据的key值一致
    watch :{
      /**
       * @param newValue: 新数据
       * @param oldValue: 旧数据
       */
      msg(newValue, oldValue){
        console.log("newValue: ", newValue);
        console.log("oldValue: ", oldValue)
      }
    }
  }
</script>