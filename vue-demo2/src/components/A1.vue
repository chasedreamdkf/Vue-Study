<template>
  <h3>A1</h3>
  <B1 :onEvent="dataFn"/>
  <p>{{ msg }}</p>
</template>

<script>
  import B1 from './B1.vue';
  export default{
    data(){
      return {
        msg:""
      }
    },
    components: {
      B1
    },
    methods: {
      dataFn(data){
        console.log(data);
        this.msg = data
      }
    }
  }
</script>