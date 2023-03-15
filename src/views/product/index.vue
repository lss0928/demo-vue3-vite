<template>
    <div>
        <div>
            <el-input v-model="name" style="width: 200px" placeholder="请输入名称"></el-input>
            <el-button type="primary" class="throttle" @click="search">search</el-button>
        </div>
        <cust-table
            v-loading="loading"
            :data-list="dataList"
            :headers="headers"
            :page="pageInfo"
            @pageChange="pageChange"
            @sortChange="sortChange"
        >
            <template #default="scope">
                <el-button size="small" @click="handleClick(scope.row)">查看</el-button>
            </template>
        </cust-table>
        <!-- <swiper></swiper> -->
        <!-- <new-product></new-product> -->
        <!-- <hr> -->
        <!-- <other-product></other-product> -->
        <!-- <hr> -->
        <!-- <part4></part4> -->
        <!-- <about></about>
        <my-footer></my-footer> -->
    </div>
</template>
<script lang="ts">
    import { defineComponent, ref, computed, onMounted, onUpdated } from 'vue';
    import Swiper from './swiper.vue';
    import NewProduct from './newProduct.vue';
    import OtherProduct from './otherProduct.vue';
    import Part4 from './part4.vue';
    import About from './about.vue';
    import MyFooter from './footer.vue';

    import CustTable from '@/components/custTable/index.vue';

    import axios from 'axios';

    type Order = 'ascending' | 'descending';

    interface SortParams {
        fieldname: string;
        order: Order;
    }
    export default defineComponent({
        components: {
            CustTable,
            Swiper,
            NewProduct,
            OtherProduct,
            Part4,
            About,
            MyFooter
        },
        setup() {
            let loading = ref(false);
            let headers = ref([]);
            let dataList = ref([]);
            let pageInfo = ref({
                pageSize: 10,
                curPage: 1,
                total: 0,
                order: 'ascending',
                fieldname: 'name'
            });
            let name = ref('');
            const pageChange = (curPage, pageSize) => {
                pageInfo.value.curPage = curPage || 1;
                pageInfo.value.pageSize = pageSize || 10;
                getData();
            };
            const sortChange = (params: SortParams) => {
                pageInfo.value.fieldname = params.fieldname;
                pageInfo.value.order = params.order;
                getData();
            };
            const getData = () => {
                loading.value = true;
                console.log('params', name.value, pageInfo.value);

                // setTimeout(() => loading.value = false, 300);
                axios
                    .post('/api/product/list', {
                        name: name.value,
                        ...pageInfo.value
                        // data: {
                        // }
                    })
                    .then((res) => {
                        loading.value = false;
                        let { code, data } = res.data;
                        dataList.value = data.dataList;
                        pageInfo.value.total = data.total;

                        // dataList.value = [
                        //     {name: 'qqq', creatTime: '2022-10-20', count: Math.round(Math.random() * 10)},
                        //     {name: 'vvv', creatTime: '2022-10-21', count: Math.round(Math.random() * 10)},
                        // ];
                        // pageInfo.value.total = Math.floor(Math.random() * 100) //dataList.value.length;
                        console.log('success', dataList.value, pageInfo.value);
                    });
            };

            const search = () => {
                pageInfo.value.curPage = 1;
                getData();
            };
            const handleClick = (row: Object) => {
                debugger;
            };
            const getHeader = () => {
                axios.post('/api/product/header', {}).then((res) => {
                    headers.value = res.data.data;
                });
            };
            onMounted(async () => {
                getHeader();
                search();
            });
            return {
                loading,
                dataList,
                headers,
                pageInfo,
                name,
                sortChange,
                pageChange,
                getData,
                search,
                handleClick
            };
        }
    });
</script>
