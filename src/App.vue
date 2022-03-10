<template>
    <Calculator/>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
    name: 'App',
    components: {
        Calculator
    }
}
</script>

<style>
#app {
    font-family: San Francisco, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
* {
    box-sizing: border-box;
}
:root body {
    margin: 0;
}
@font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}
</style>
