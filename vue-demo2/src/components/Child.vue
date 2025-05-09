<template>
  <h3>Child</h3>
  <p>{{ title1 }}</p>
  <p>{{ title2 }}</p>
</template>

<script>
  export default {
    props: ["title1", "title2"]
  }
</script>