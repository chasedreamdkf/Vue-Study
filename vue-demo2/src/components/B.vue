<template>
  <h3>B</h3>
  <p>{{ title }}</p>
  <p>{{ age }}</p>
  <p v-for="name of names">{{ name }}</p>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props :{
      title:{
        type: [String, Number, Array, Object]
      },
      age: {
        type: Number,
        default: 0  // 默认值
        // 数字和字符串可以直接default，但数组和对象必须用工厂函数返回默认值
      },
      names:{
        type:Array,
        default(){
          return ["空"]
        }
      },
      test: {
        type: String,
        required: true  // 必选项
      }
    }
  }
</script>