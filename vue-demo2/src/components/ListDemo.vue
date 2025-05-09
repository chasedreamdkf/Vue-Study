<template>
  <h3>列表渲染</h3>
  <h4>简单数据与数组下标</h4>
  <p v-for="(name, index) in names">{{ index }}-{{ name }}列表</p>
  <p v-for="(name, index) of names">{{ index }}-{{ name }}列表</p>
  <h4>复杂数据</h4>
  <div v-for="result in results">
    <h5>{{ result.id }}</h5>
    <p>{{ result.text }}</p>
  </div>
  <div v-for="result of results">
    <h5>{{ result.id }}</h5>
    <p>{{ result.text }}</p>
  </div>
  <h4>对象属性</h4>
  <div>
    <p v-for="(value, key, index) in usrInfo">{{ value }}-{{ key }}-{{ index }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        /*简单数据 */
        names: ['A', 'B', 'C', 'D'],
        // 复杂数据
        results: [
          {
            'id': 123456,
            'text': "为从1"
          },
          {
            'id': 478154,
            'text': "为从2"
          },
          {
            'id': 154584,
            'text': "为从3"
          },
          {
            'id': 478154,
            'text': "为从4"
          }
        ],
        // 对象属性
        usrInfo: {
          name: "Tom",
          sex: "男",
          age: 18
        }
      }
    }
  }
</script>