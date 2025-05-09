<template>
  <h3>B1</h3>
  <p>{{ onEvent("传递数据") }}</p>
</template>

<script>
  export default{
    data(){
      return {
        
      }
    },
    props:{
      onEvent: Function
    }
  }
</script>