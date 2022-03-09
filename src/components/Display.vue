<template>
    <div class="display" ref="display" :style="{fontSize: fontSize+'px'}">
        <span :style="textStyles" ref="text">{{message}}</span>
    </div>
</template>

<script>
const paddingWidth = 24;
const defaultFontSize = 60;
const maxWidth = 40;
export default {
    name: 'Display',
    props: {
        message: String
    },
    data: ()=>({
        fontSize: defaultFontSize
    }),
    computed: {
        textStyles() {
            return this.message.length <= maxWidth
                ? {}
                : {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                };
        }
    },
    watch: {
        message() {
            if (this.message.length <= 12)
                return this.fontSize = defaultFontSize;
            this.$nextTick(this.updateTextWidth);
        }
    },
    methods: {
        updateTextWidth() {
            if (this.$refs.display.clientWidth - paddingWidth * 2 >= this.$refs.text.clientWidth)
                return;
            this.fontSize--;
            this.$nextTick(this.updateTextWidth);
        }
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
