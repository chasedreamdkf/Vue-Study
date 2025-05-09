<template>
  <h3>子组件事件</h3>
  <button @click="TansDataToParent">向父组件传递数据</button>
</template>

<script>
  export default{
    methods:{
      TansDataToParent(){
        // 自定义事件
        this.$emit("aEvent", "子组件数据") // aEvent:事件名，后面的是数据
      }
    }
  }
</script>