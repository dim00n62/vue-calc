<template>
    <button :class="this.getClass()" :style="`grid-area: ${id};`" :disabled="disabled">
        {{label}}
    </button>
</template>

<script>
export default {
  name: 'Key',
  props: {
    label: String,
    id: String,
    modifiers: {
        type: Array,
        default: ()=>([])
    },
    disabled: Boolean
  },
  methods: {
    getClass(){
        const mods = this.modifiers.reduce((acc, mod)=>({...acc, [`key--${mod}`]: true}), {});
        return Object.assign({key: true}, mods);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.key {
    background-color: #D6D6D6;
    color: black;
    font-size: 40px;
    border: 1px solid transparent;
    outline: none;
    background-clip: padding-box;
    cursor: pointer;
}
.key:focus, .key:hover {
    opacity: .9;
}
.key:active {
    opacity: .8;
}
.key:disabled {
    color: gray;
    opacity: .7;
    cursor: not-allowed;
}
.key--orange {
    background-color: #FF8E00;
    color: white;
}
.key--bottom-left {
    border-bottom-left-radius: 12px;
}
.key--bottom-right {
    border-bottom-right-radius: 12px;
}
</style>
