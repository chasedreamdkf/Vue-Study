<template>
  <h3>计算属性</h3>
  <h5>{{ test.name }}</h5>
  <p>{{ testContent }}</p>
</template>

<script>
export default {
  data() {
    return {
      test: {
        name: "test",
        content: ["A", "B", "C", "D"]
      }
    }
  },
  // 计算属性
  computed: {
    testContent(){
      return this.test.content.length > 0 ? 'Yes': 'No';
    }
  }
}
</script>