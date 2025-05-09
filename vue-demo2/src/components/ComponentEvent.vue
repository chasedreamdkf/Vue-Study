<template>
  <h3>组件事件</h3>
  <Child2 @aEvent="getData"/>
</template>

<script>
  import Child2 from "./Child2.vue";
  export default{
    components: {
      Child2
    },
    methods:{
      getData(data){
        console.log("触发事件", data);
      }
    }
  }
</script>