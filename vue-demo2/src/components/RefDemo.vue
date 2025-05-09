<template>
  <div ref="container" class="container">{{ content }}</div>
  <button @click="getElement">获取元素</button>
</template>

<script>
  /**
   * 内容改变：{{ 模板语法 }}
   * 属性改变：v-bind指令
   * 事件：v-on指令
   */
  export default {
    data() {
      return {
        content: "内容"
      }
    },
    methods: {
      /**
       * 借ref可以使用this.$refs获取和操作原生的dom元素
       */
      getElement() {
        console.log(this.$refs.container)
        this.$refs.container.innerHTML = "hhhhhhh"
      }
    }
  }
</script>