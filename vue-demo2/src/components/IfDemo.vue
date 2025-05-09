<template>
  <h2>条件渲染</h2>
  <div v-if="flag">能看见吗</div>
  <div v-else>那你只能看到我了</div>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not&nbsp;A&nbsp;B&nbsp;C</div>
  <div v-show="flag">能看见吗2</div>
</template>

<script>
  export default {
    data (){
      return {
        flag: true,
        type: "B"
      }
    }
  }
</script>