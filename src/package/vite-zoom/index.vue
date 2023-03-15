<template>
    <div class="vite-zoom">
        <div
            :class="['container', { 'is-moving': mouseDown }]"
            ref="container"
            @mousewheel="handelMousewheel"
            @mousedown="handelMousedown"
            @mouseup="handelMouseup"
            @mousemove="handelMousemove"
        >
            <section class="section" :style="containerStyle">
                <div ref="okrTree" :style="resizeStyle">
                    <slot></slot>
                </div>
            </section>
        </div>
        <div class="slider-warp">
            <vite-button type="text" @click="increaScale" circle icon="el-icon-circle-plus-outline"></vite-button>
            <el-slider v-model="scale" :min="0" :step="1" :max="100" vertical height="100px" :marks="marks">
            </el-slider>
            <vite-button type="text" @click="decreaScale" circle icon="el-icon-remove-outline"></vite-button>
            <br />
            <vite-button type="text" @click="resetScale" circle icon="el-icon-refresh" title="重置"></vite-button>
        </div>
    </div>
</template>

<script>
    import ViteButton from '@/package/vite-button/index.vue';
    export default {
        components: {
            ViteButton
        },
        data() {
            return {
                scale: 100,
                marks: {
                    50: ''
                },
                mouseDown: false,
                offsetX: 0,
                offsetY: 0
            };
        },
        computed: {
            resizeStyle() {
                return {
                    transform: `scale(${this.scale / 100})`,
                    'transform-origin': 'left top'
                };
            },
            containerStyle() {
                return {
                    transform: `translate(${this.offsetX}px, ${this.offsetY}px)`
                };
            }
        },
        methods: {
            increaScale() {
                this.scale += 2;
                if (this.scale > 100) {
                    this.scale = 100;
                }
            },
            decreaScale() {
                this.scale -= 2;
                if (this.scale < 1) {
                    this.scale = 1;
                }
            },
            resetScale() {
                // this.scale = 100;
                // this.offsetX = 0;
                // this.offsetY = 0;
                this.initZoom();
            },
            // 初始化比例
            initZoom() {
                let orkW = this.$refs.okrTree.clientWidth;
                let orkH = this.$refs.okrTree.clientHeight;

                let container = this.$refs.container;
                let containerW = container.clientWidth;
                let containerH = container.clientHeight;
                let scale = containerW / orkW;
                this.scale = Math.ceil(scale * 100);

                this.offsetX = 0;
                this.offsetY = 0;
            },
            handelMousewheel(event) {
                if (event.ctrlKey) {
                    // console.log('handelMousewheel', event, event.deltaX, event.deltaY);
                    event.preventDefault();
                    // if (event.deltaY > 0) {
                    //     console.log('向内');
                    // }
                    // if (event.deltaY < 0) {
                    //     console.log('向外');
                    // }
                    let zoom = parseInt(this.scale, 10);
                    zoom += event.wheelDelta / 120;
                    zoom < 0 && (zoom = 0);
                    zoom > 100 && (zoom = 100);
                    // console.log(event.wheelDelta, zoom);
                    zoom > 0 && (this.scale = zoom);
                    return;
                }
            },
            handelMousedown(e) {
                if (e.buttons & (e.buttons === 1)) {
                    // console.log('mousedown', e);
                    this.mouseDown = true;
                    this.oldClientX = e.clientX;
                    this.oldClientY = e.clientY;

                    this.oldTransX = this.offsetX;
                    this.oldTransY = this.offsetY;
                }
                return false;
            },
            handelMouseup(e) {
                // console.log('mouseup');
                this.mouseDown = false;
            },
            handelMousemove(e) {
                // console.log('mousemove');
                if (this.mouseDown) {
                    e.preventDefault();
                    let diffX = e.clientX - this.oldClientX;
                    let diffY = e.clientY - this.oldClientY;
                    // if (diffX > 0) {
                    //     console.log('x--right')
                    // } else if (diffX < 0) {
                    //     console.log('x--left')
                    // }
                    // if (diffY > 0) {
                    //     console.log('y--bottom')
                    // } else if (diffY < 0) {
                    //     console.log('y--top')
                    // }
                    this.moveTree(diffX, diffY);
                }
                return false;
            },
            moveTree(x, y) {
                this.offsetX = this.oldTransX + x;
                this.offsetY = this.oldTransY + y;
            }
        }
    };
</script>

<style lang="less" scoped>
    .vite-zoom {
        position: relative;
        background: @placeholder;
    }
    .slider-warp {
        position: absolute;
        left: 10px;
        bottom: 10px;
        border: 1px solid @primary;
        border-radius: 5px;
        text-align: center;
        background: #fff;
        padding: 5px;
        .el-slider {
            margin: 8px 0 12px;
        }
        .vite-button {
            // padding: 5px;
            // font-size: 18px;
        }
    }
</style>
