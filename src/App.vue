<template>
    <menu-list class="menu-list"></menu-list>
    <div class="main">
        <header-comp></header-comp>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MenuList from '@/components/menuList/index.vue';
    import HeaderComp from '@/components/Header.vue';
    import { defineComponent, reactive, ref, toRefs } from 'vue';
    // import {useRouter} from 'vue-router';
    import useUserStore from './store/user';
    export default defineComponent({
        name: 'App',
        components: {
            MenuList,
            HeaderComp
        },
        setup() {
            // let router = useRouter();
            // console.log('App', router.options.routes)
            // let store = useUserStore();
            // debugger
            // console.log(store)
            return {};
        }
    });
</script>
<style lang="less" scoped></style>
