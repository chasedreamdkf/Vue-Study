<template>
  <h2>事件修饰符</h2>
  <a @click.prevent="clickHandle($event)" href="https://www.baidu.com">百度一下(通过event对象阻止默认事件)</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    clickHandle(e) {
      // 通过event对象阻止默认事件
      // e.preventDefault();
      console.log('点击了');
    },
    clickDiv() {
      console.log('Div');
    },
    clickP() {
      console.log('P');
    }
  }
}
</script>