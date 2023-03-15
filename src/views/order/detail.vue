<template>
    <div>
        {{ name }}\{{ age }}\{{ hobby }}
        <el-button @click="back">back</el-button>
    </div>
</template>
<script>
    import { defineComponent, reactive, toRef, toRefs, onMounted, onUnmounted } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    export default defineComponent({
        setup() {
            // router 全局路由
            let router = useRouter();
            let back = () => {
                router.back();
            };
            // 当前路由
            let route = useRoute();
            console.log(route.query, route.params);
            //
            let data = reactive({
                ...route.query
            });
            //
            let initData = () => {
                console.log('initData');
            };
            // 挂载
            onMounted(() => {
                console.log('onMounted');
                initData();
            });
            console.log('setup');
            // 组件销毁
            onUnmounted(() => {
                console.log('onUnmounted');
                // 清除定时器
            });
            return {
                back,
                ...toRefs(data),
                initData
            };
        }
    });
</script>
