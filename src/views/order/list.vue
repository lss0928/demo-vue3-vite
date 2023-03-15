<template>
    <ul>
        <li v-for="(item, i) in list" :key="i" @click="select(item)">
            <span>{{ item.name }}: </span>
            <el-tag>{{ item.age }} </el-tag>
            <el-tag>{{ item.hobby }} </el-tag>
            <el-button size="mini" @click="del(i)">del</el-button>
            <el-button size="mini" @click="go(item)">go</el-button>
        </li>
    </ul>
</template>
<script>
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'List',
        props: {
            list: {
                type: Array,
                required: true,
                default() {
                    return [];
                }
            }
        },
        setup(props, ctx) {
            let select = (data) => {
                ctx.emit('select', data.name, data.age, data.hobby);
            };
            let del = (i) => {
                ctx.emit('del', i);
            };
            let go = (item) => {};
            return {
                select
            };
        }
    });
</script>
