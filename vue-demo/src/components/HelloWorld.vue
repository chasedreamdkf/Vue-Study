<template>
  <h3>属性值为null或undefined属性会被移除</h3>
  <h3>v-bind:**可简写为->:**</h3>
  <div v-bind:class="msg" v-bind:title="title">测试</div>
  <h3>绑定多个值</h3>
  <div v-bind="complex">测试</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: "activate",
        title: null,
        complex: {
          id: test1,
          class: test2
        }
      }
    }
  }
</script>

<style>
  .activate {
    color: red;
    font-size: 30px;
  }
</style>