<template>
    <el-carousel trigger="click" height="450px" autoplay arrow="hover">
        <el-carousel-item v-for="(item, i) in list" :key="item">
            <img class="aaa" src="@/assets/1.png" alt="Space" />
            <figcaption class="orbit-caption">{{ i }}</figcaption>
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    import { defineComponent, reactive, ref, toRefs } from 'vue';

    export default defineComponent({
        setup() {
            let data = reactive({
                idx: 0,
                list: [
                    {
                        src: '@/assets/02.jpeg',
                        caption: 'Outta This World'
                    },
                    {
                        src: '@/assets/02.jpeg',
                        caption: 'Outta This World'
                    },
                    {
                        src: '@/assets/02.jpeg',
                        caption: 'Outta This World'
                    }
                ]
            });
            // let prevBtn = () => {
            //     data.idx--;
            //     data.idx = data.idx <= 0 ? 0 : data.idx;
            // }
            // let nextBtn = () => {
            //     data.idx++;
            //     data.idx = data.idx >= data.list.length -1 ? data.list.length - 1 : data.idx;
            // }
            return {
                ...toRefs(data)
                // prevBtn,
                // nextBtn
            };
        }
    });
</script>
<style scoped>
    img {
        width: 100%;
    }
</style>
