<template>
  <h3>模板语法/文本插值</h3>
  <p>{{ msg }}</p>
  <p>{{ hello }}</p>
  <h3>js表达式,&nbsp;可用单一表达式，eg:简单算术、三目运算等</h3>
  <p>{{ num + 1 }}</p>
  <p>{{ ok ? "Yes": "No" }}</p>
  <p>{{ msg.split("").reverse().join("") }}</p>
  <h1>简单判定规则:&nbsp;return&nbsp;之后的才能在模板语法中用</h1>
  <h3>原始html，需要使用&nbsp;v-html&nbsp;指令,否则以纯文本渲染</h3>
  <p>错误示范:{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
</template>


<script>
  export default {
    data() {
      return {
        msg: "神奇的语法",
        hello: "Hello World!",
        num: 10,
        ok: true,
        rawHtml: "<a href='https://www.baidu.com'>百度</a>"
      }
    }
  }
</script>
