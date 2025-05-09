<template>
  <h3>Parent</h3>
  <Child title1="Parent传递的数据" :title2="msg"/>
</template>

<script>
  import Child from "./Child.vue";
  export default {
    components: {
      Child
    },
    data() {
      return{
        msg: "动态传递的数据"
      }
    }
  }
</script>