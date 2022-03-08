<template>
  <header class="header">
    <button class="header_action header_action--red"/>
    <button class="header_action header_action--yellow"/>
    <button class="header_action header_action--green"/>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 48px;
  background-color: #4C4C4C;
  padding: 12px 16px;
}
.header_action {
  height: 24px;
  width: 24px;
  border-radius: 12px;
  outline: none;
  border: none;
  overflow: hidden;
  cursor: pointer;
}
.header_action:not(:first-child) {
  margin-left: 12px;
}
.header_action:hover {
  opacity: .9;
}
.header_action--red {
  background-color: #FF3138;
}
.header_action--yellow {
  background-color: #FFBE00;
}
.header_action--green {
  background-color: #00D647;
}
</style>
