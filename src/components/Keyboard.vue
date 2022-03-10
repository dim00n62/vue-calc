<template>
    <div class="keyboard">
        <template v-for="(keys, index) in keyRows" :key="index">
        <Key
            v-for="(key) in keys"
            v-bind="key"
            :key="key.id"
            @click="()=>this.handleClick(key)"
        />
        </template>
    </div>
</template>

<script>
import Key from './Key.vue';
import keyRows from '../assets/config.json';
export default {
    name: 'Keyboard',
    components: {
        Key
    },
    data: ()=>({
        keyRows
    }),
    props: {
         message: String
    },
    inject: ['getKeyLabel'],
    methods: {
        handleClick({label, id}) {
            this.$emit('key-click', {value: label, id});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboard {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-areas:
        "ac plusMinus percent divide"
        "seven eight nine multiply"
        "four five six minus"
        "one two three plus"
        "zero zero comma result";
    flex: 1;
    background: #8E8E8E;
}
</style>
