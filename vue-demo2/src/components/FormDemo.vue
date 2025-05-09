<template>
  <h3>表单输入绑定</h3>
  <form>
    <input type="text" v-model="msg"> <!-- msg根据输入框中的内容实时变化 -->
    <p>{{ msg }}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checked">{{ checked }}</label>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        msg: "",
        checked: false
      }
    }
  }
</script>