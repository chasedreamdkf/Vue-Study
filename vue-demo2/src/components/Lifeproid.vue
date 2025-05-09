<template>
  <h3>组件生命周期函数应用</h3>
  <p ref="name">测试数据</p>
  <ul>
    <li v-for="item in banner">
      <h4>{{ item.title }}</h4>
      <p>{{ item.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      banner: []
    }
  },
  created(){
    // 模拟网络请求，实际应用中应该先渲染结构，再获取网络 数据
    this.banner = [
      {
        "title": 1,
        "content": "A"
      },
      {
        "title": 2,
        "content": "B"
      },
      {
        "title": 3,
        "content": "C"
      },
      {
        "title": 4,
        "content": "D"
      },
    ]
  },
  beforeMount(){
    console.log(this.$refs.name)
  },
  mounted(){
    console.log(this.$refs.name)
  },
}
</script>