<template>
  搜索: <input type="text" v-model="search">
</template>

<script>
  export default{
    data(){
      return {
        search: ""
      }
    },
    methods:{},
    watch: {
      search(a, b){
        this.$emit("searchEvent", a);
      }
    }
  }
</script>