<template>
  <h3>数组变化侦测</h3>
  <div>
    <p>可变方法</p>
    <button @click="addData">添加数据</button>
    <ul>
      <li v-for="(name1, index) of names1" :key="index">{{ name1 }}</li>
    </ul>
    <p>当前数组1：{{ names1 }}</p>
  </div>
  <div>
    <p>不可变方法，采用替换原数组策略</p>
    <button @click="chandeArray">替换原数组</button>
    <ul>
      <li v-for="(name2, index) of names2" :key="index">{{ name2 }}</li>
    </ul>
    <p>当前数组2：{{ names2 }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        names1: ["AAA", "BBB", "CCC", "DDD"],
        names2: ["AAA", "BBB", "CCC", "DDD"]
      }
    },
    methods: {
      addData() {
        // 引起UI自动更新的方法
        this.names1.push("EEE");
        // 不会引起UI自动更新
        this.names1.concat(["FFF"]);
      },
      chandeArray() {
        this.names2 = this.names2.concat(["EEE", "FFF"]);
      }
    }
  }
</script>

<style scoped>
  button {
    background-color: #7af;
    height: 40px;
    border-radius: 10px;
  }
</style>