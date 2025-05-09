<template>
  <h3>Key属性添加到v-for中</h3>
  <p v-for="(name, index) of names" :key="index">{{ index }}-{{ name }}</p>
</template>

<script>
  export default {
    data() {
      return {
        names: ['A', 'B', 'C', 'D']
      }
    }
  }
</script>