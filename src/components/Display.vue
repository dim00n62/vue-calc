<template>
  <div class="display">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Display',
  props: {
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display {
    height: 112px;
    padding: 12px 24px 20px;
    background-color: #4C4C4C;
    color: white;
    font-size: 60px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end
}
</style>
