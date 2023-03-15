<template>
    <vite-button type="warning" size="big" @click="handleClick">adasd</vite-button>
    <!-- <vite-button type="warning" size="big">adasd</vite-button>
  <vite-zoom>
      <div class="content">123</div>
  </vite-zoom> -->
</template>

<script lang="ts">
    // import ViteButton from '@/package/vite-button/index.vue';
    // import ViteZoom from '@/package/vite-zoom/index.vue';
    import { defineComponent, reactive, toRef, toRefs, onMounted, onUnmounted } from 'vue';
    export default defineComponent({
        components: {
            // ViteButton,
            // ViteZoom
        },
        setup(props, ctx) {
            onMounted(() => {
                console.log('this====', ctx);
            });
            return {};
        },
        methods: {
            handleClick() {
                console.log(1);
            }
        }
    });
</script>

<style lang="less" scoped>
    .content {
        background: red;
        width: 500px;
        height: 500px;
    }
</style>
