<template>
    <h3>事件传参</h3>
    <button @click="addCount">Add</button>
    <p>{{ count }}</p>
    <button @click="transData('Hello')">TransData</button>
    <p @click="getName(name)" v-for="(name, index) of names" :key="index">{{ name }}</p>
    <p>传参同时获取event</p>
    <!-- 注意使用$传递event -->
    <p @click="getNameAndEvent(name, $event)" v-for="(name, index) of names" :key="index">{{ name }}</p>
  </template>
  
  <script>
    export default {
      data() {
        return {
          count: 0,
          names: ['AA', 'BB', 'CC', 'DD']
        }
      },
      methods:{
        // 获取event对象
        addCount(e) {
          e.target.innerHTML = "Add" + this.count
          console.log(e)
          this.count++
        },
        // 传递数据
        transData(msg) {
          console.log(msg)
        },
        getName(name) {
          console.log(name)
          
        },
        // 传参同时获取event
        getNameAndEvent(name, e){
          console.log(name)
          console.log(e)
        }
      }
    }
  </script>