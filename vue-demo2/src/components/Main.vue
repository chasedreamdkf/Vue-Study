<template>
  <h3>Main</h3>
  <p>搜索结果: {{ msg }}</p>
  <Search @searchEvent="getSearch"/>
</template>

<script>
  import Search from './Search.vue';
  export default {
    data(){
      return {
        msg: ""
      }
    },
    components: {
      Search
    },
    methods:{
      getSearch(data){
        this.msg = data
      }
    }
  }
</script>