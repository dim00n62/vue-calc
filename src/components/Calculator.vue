<template>
  <div class="calculator">
    <Header/>
    <Display message="123"/>
    <Keyboard/>
  </div>
</template>

<script>
import Display from './Display.vue';
import Keyboard from './Keyboard.vue';
import Header from './Header.vue';
export default {
  name: 'Calculator',
  components: {
    Display,
    Keyboard,
    Header
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  height: 644px;
  width: 468px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
}
</style>
