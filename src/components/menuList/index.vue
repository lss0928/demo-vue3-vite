<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#42b883"
        text-color="#fff"
        active-text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        :collapse="isCollapse"
        router
    >
        <el-menu-item :index="item.path" v-for="(item, i) in menu" :key="i">
            <el-icon><component :is="item.icon" /></el-icon>{{ item.title }}
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
    // import {
    //   Document,
    //   Menu as IconMenu,
    //   Location,
    //   Setting,
    // } from '@element-plus/icons-vue';
    import { ref, reactive, onMounted } from 'vue';
    import router from '../../router/index.js';
    let menu = reactive(router.options.routes);
    let isCollapse = ref(false);
    let activeIndex = ref('0');

    let handleOpen = () => {};
    let handleClose = () => {};
    let handleSelect = (index, indexPath, item, routeResult) => {
        // debugger
    };

    onMounted(() => {});
</script>
<style lang="less" scoped>
    .el-menu-vertical-demo {
        .el-menu-item {
            .el-icon {
                color: #fff;
                margin-right: 10px;
            }
            &.is-active {
                background: #ccc !important;
                font-weight: bold;
            }
        }
    }
</style>
