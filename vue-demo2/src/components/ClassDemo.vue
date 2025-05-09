<template>
  <p :class="{ 'active': isActive, 'danger': hasError }">Class样式绑定1-对象</p>
  <p :class="ObjClass">Class样式绑定2</p>
  <p :class="[arrActive, arrHas]">Class样式绑定3-数组</p>
  <p :class="[isActive ? 'danger': '']">Class样式绑定4</p>
  <p :class="[isActive ? 'danger': { 'danger': hasError }]">Class样式绑定5-数组嵌套对象</p>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: true,
        ObjClass: {
          'active': true,
          'danger': true
        },
        arrActive: "active",
        arrHas: 'danger'
      }
    }
  }
</script>

<style>
  .danger {
    color: red;
  }
</style>