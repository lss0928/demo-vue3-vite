/** * props: 数据，表头，分页 * emit: pageChange * * */
<template>
    <div>
        <!-- {{page}} -->
        <el-table
            :data="dataList"
            :default-sort="{
                prop: page.fieldname,
                order: page.order
            }"
            @sort-change="sortChange"
        >
            <el-table-column
                v-for="(item, i) in headers"
                sortable
                :label="item.label"
                :prop="item.prop"
                :key="i"
            ></el-table-column>
            <el-table-column #default="scope" fixed="right" prop="" label="操作">
                <slot :row="scope.row">
                    <!-- <el-button @click="handleClick(scope.row)">查看</el-button> -->
                </slot>
            </el-table-column>
        </el-table>
        <div style="text-align: right">
            <!-- {{showPagination}} -->
            <el-pagination
                background
                :total="page.total"
                :page-sizes="pageSizes"
                :current-page="page.curPage"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="pageSizeChange"
                @current-change="pageChange1"
            ></el-pagination>
        </div>
    </div>
</template>
<script lang="ts">
    type ListItem = {
        [props: string]: any;
    };
    type HeaderItem = {
        prop: string;
        label: string;
        width?: number;
    };
    type Page = {
        pageSize: number;
        curPage: number;
        total: number;
        order: string;
        fieldname: string;
    };

    import { nextTick, PropType } from 'vue';
    import { defineComponent, computed, ref, watch } from 'vue';
    export default defineComponent({
        props: {
            dataList: {
                type: Array as PropType<ListItem[]>,
                default: () => []
            },
            headers: {
                type: Array as PropType<HeaderItem[]>
            },
            page: {
                type: Object as PropType<Page>
            }
        },
        setup(props, ctx) {
            console.log(1);
            const pageSizes = ref([10, 20, 50, 100]);
            const pageInfo = ref({
                curPage: props.page.curPage,
                pageSize: props.page.pageSize
            });

            const showPagination = computed(() => props.page.total > props.page.pageSize);

            const list = ref(props.dataList);

            const sortChange = ({ column, prop, order }) => {
                ctx.emit('sortChange', { fieldname: prop, order });
            };
            const pageChange1 = (curPage: number) => {
                pageInfo.value.curPage = curPage;
            };
            const pageSizeChange = (pageSize: number) => {
                pageInfo.value.curPage = 1;
                pageInfo.value.pageSize = pageSize;
            };

            watch(pageInfo.value, (val) => {
                nextTick(() => {
                    ctx.emit('pageChange', pageInfo.value.curPage, pageInfo.value.pageSize);
                });
            });

            return {
                pageSizes,
                pageInfo,

                showPagination,

                sortChange,
                pageChange1,
                pageSizeChange
            };
        }
    });
</script>
