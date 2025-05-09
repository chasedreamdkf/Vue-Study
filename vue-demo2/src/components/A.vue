<template>
  <h3>A</h3>
  <B :title="title" :age="age" :names="names"/>
</template>

<script>
  import B from './B.vue'
  export default {
    components: {
      B
    },
    data() {
      return {
        title: "测试",
        age: 20,
        names: [1, 2, 3, 4, 5]
      }
    }
  }
</script>