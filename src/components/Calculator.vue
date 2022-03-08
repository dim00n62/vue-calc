<template>
  <div class="calculator">
    <Header/>
    <Display :message="calc.displayValue"/>
    <Keyboard @click="handleKeyboardClick"/>
  </div>
</template>

<script>
import Display from './Display.vue';
import Keyboard from './Keyboard.vue';
import Header from './Header.vue';
import Calculator from '../services/calculator.ts';
export default {
  name: 'Calculator',
  components: {
    Display,
    Keyboard,
    Header
  },
  data: ()=>({
    calc: new Calculator()
  }),
  methods: {
    handleKeyboardClick({value, id}) {
      this.calc.handleButton(value, id);
    }
  }
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
