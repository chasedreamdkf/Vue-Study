<template>
  <h3>Slot再续集</h3>
  <slot :msg="chMsg">插槽默认数据</slot>
  <hr>
  <slot name="header" :msg2="chMsg">插槽默认数据</slot>
</template>

<script>
  export default {
    data() {
      return {
        chMsg: "子组件数据"
      }
    }
  }
</script>