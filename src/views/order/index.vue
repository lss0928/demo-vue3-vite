<template>
    <el-dialog v-model="show" width="800px">
        <el-form :model="form">
            <el-form-item prop="customer" label="收货单位">
                <el-input v-model="form.customer"></el-input>
            </el-form-item>
            <el-form-item prop="address" label="收货地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item prop="provider" label="供应商">
                <el-input v-model="form.provider"></el-input>
            </el-form-item>
            <el-form-item prop="orderRemark" label="订单备注">
                <el-input v-model="form.orderRemark"></el-input>
            </el-form-item>
            <el-form-item v-if="isDetail || isEdit" prop="createTime" label="创建时间">
                <el-input v-model="form.createTime" disabled></el-input>
            </el-form-item>
            <el-form-item v-if="isDetail" prop="updateTime" label="更新时间">
                <el-input v-model="form.updateTime"></el-input>
            </el-form-item>
            <el-form-item v-if="isDetail" prop="updateName" label="修改人">
                <el-input v-model="form.updateName"></el-input>
            </el-form-item>
        </el-form>
        <el-table :data="dataList">
            <el-table-column label="品名及规格型号" prop="name">
                <template #default="{ row, $index }"><el-input v-model="row.name"></el-input></template>
            </el-table-column>
            <el-table-column label="单位" prop="unit">
                <template #default="{ row, $index }"><el-input v-model="row.unit"></el-input></template>
            </el-table-column>
            <el-table-column label="数量" prop="count">
                <template #default="{ row, $index }"><el-input v-model="row.count"></el-input></template>
            </el-table-column>
            <el-table-column label="备注" prop="remark">
                <template #default="{ row, $index }"><el-input v-model="row.remark"></el-input></template>
            </el-table-column>
            <el-table-column label="操作" prop="" v-if="!isDetail">
                <template #default="{ row, $index }">
                    <el-button size="small" @click="del(row, $index)">-</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="!isDetail">
            <el-button type="primary" @click="add">继续添加</el-button>
            <!-- <el-button @click="reset">Reset</el-button> -->
        </div>
        <template #footer v-if="!isDetail">
            <el-button type="primary" @click="submit">提交</el-button>
        </template>
    </el-dialog>
    <el-row>
        <el-col :span="20">
            <el-form :model="searchForm" inline label-width="100px" label-position="right">
                <el-form-item prop="customer" label="customer">
                    <el-input v-model="searchForm.customer" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item prop="daterange" label="daterange">
                    <el-date-picker
                        v-model="searchForm.daterange"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                    ></el-date-picker>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="2">
            <el-button @click="search" type="primary">Search</el-button>
        </el-col>
        <el-col :span="2">
            <el-button @click="openDialog" type="primary">New</el-button>
        </el-col>
    </el-row>
    <cust-table
        v-loading="loading"
        :data-list="orderList"
        :headers="headers"
        :page="pageInfo"
        @pageChange="pageChange"
        @sortChange="sortChange"
    >
        <template #default="scope">
            <el-button size="small" @click="handleClick(scope.row, 'detail')">查看</el-button>
            <el-button size="small" @click="handleClick(scope.row, 'edit')">edit</el-button>
            <el-button size="small" @click="handleClick(scope.row, 'del')">del</el-button>
        </template>
    </cust-table>
    <!-- <list :list="list" @select="select"></list> -->
</template>
<script lang="ts">
    import { defineComponent, ref, reactive, toRefs, computed, onMounted } from 'vue';
    import storeIndex from '../../store/common';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    // import List from './list.vue';
    import CustTable from '@/components/custTable/index.vue';
    interface PageInfo {
        pageSize: number;
        curPage: number;
        total: number;
        order: 'ascending';
        fieldname: 'name';
    }
    export default defineComponent({
        // 父子组件传参
        components: {
            // List
            CustTable
        },
        setup(props, ctx) {
            let show = ref(false);
            let action = ref('');
            // 定义多个数据
            let form = ref({
                orderId: '',
                customerId: '',
                customer: '',
                address: '',
                provider: '',
                orderRemark: '',
                createTime: '',
                updateTime: '',
                updateName: ''
            });
            let searchForm = ref({
                customer: '',
                daterange: ''
            });
            let dataList = ref([
                {
                    name: '',
                    unit: '件',
                    count: 1,
                    remark: ''
                }
            ]);
            let loading = ref(false);
            let pageInfo = ref({
                pageSize: 10,
                curPage: 1,
                total: 0,
                order: 'ascending',
                fieldname: 'name'
            });
            let headers = ref([
                {
                    label: 'customer',
                    prop: 'customer'
                },
                {
                    label: 'provider',
                    prop: 'provider'
                },
                {
                    label: 'orderRemark',
                    prop: 'orderRemark'
                },
                {
                    label: 'createTime',
                    prop: 'createTime'
                },
                {
                    label: 'updateTime',
                    prop: 'updateTime'
                },
                {
                    label: 'updateName',
                    prop: 'updateName'
                }
            ]);
            let orderList = ref([]);

            // 计算属性
            let totalCount = computed(() => {
                return dataList.value.length;
            });
            let isDetail = computed(() => {
                return form.value.orderId && action.value === 'detail';
            });
            let isEdit = computed(() => {
                return form.value.orderId && action.value === 'edit';
            });
            const store = storeIndex();
            // debugger
            let stateName = computed(() => {
                return store.name;
            });
            // vue-router
            let router = useRouter();
            let go = (item) => {
                router.push({
                    name: 'Detail',
                    query: {
                        ...item
                    },
                    params: {
                        id: 1
                    }
                });
            };
            const pageChange = (curPage, pageSize) => {
                // pageInfo.value.curPage = curPage || 1;
                // pageInfo.value.pageSize = pageSize || 10;
                getOrderList();
            };
            const sortChange = (params) => {
                // pageInfo.value.fieldname = params.fieldname;
                // pageInfo.value.order = params.order;
                getOrderList();
            };
            const handleClick = (row, op) => {
                show.value = true;
                action.value = op;
                if (op === 'detail' || op === 'edit') {
                    axios
                        .post('/api/order/detail', {
                            orderId: row.orderId,
                            customerId: row.customerId
                        })
                        .then((res) => {
                            let { code, data, status } = res.data;
                            dataList.value = data.list;
                            delete data.list;
                            // debugger
                            form.value = data;
                        });
                }
                if (op === 'del') {
                    axios
                        .post('/api/order/detail', {
                            orderId: row.orderId,
                            customerId: row.customerId
                        })
                        .then((res) => {});
                }
            };
            let getOrderList = () => {
                loading.value = true;
                axios
                    .post('/api/order/list', {
                        pagaSize: 1,
                        pageNumber: 10
                        // data: {
                        // }
                    })
                    .then((res) => {
                        loading.value = false;
                        let { code, data, status } = res.data;
                        let { dataList, total, pagaSize } = data;
                        orderList.value = dataList;
                    });
            };
            let search = () => {
                console.log(searchForm.value);
            };
            let openDialog = () => {
                show.value = true;
            };
            // 定义方法
            let add = () => {
                dataList.value.push({ name: '', count: '', unit: '件', remark: '' });
            };
            let del = (item, idx) => {
                debugger;
                dataList.splice(idx, 1);
            };
            let submit = () => {
                let url = '';
                if (isDetail.value) {
                    url = '/api/order/add';
                }
                if (action.value === 'edit') {
                    url = '/api/order/update';
                }
                axios
                    .post(url, {
                        ...form.value,
                        dataList: dataList.value
                    })
                    .then((res) => {
                        let { code, status } = res.data;
                        if (code === 0) {
                            this.$message.success(status);
                        }
                    });
            };
            let select = (v1, v2, v3) => {
                // debugger;
            };
            onMounted(() => {
                getOrderList();
            });
            return {
                show,
                action,
                // ...toRefs(data),
                form,
                searchForm,
                dataList,
                loading,
                pageInfo,
                isDetail,
                isEdit,
                headers,
                orderList,
                openDialog,
                search,
                add,
                del,
                submit,
                totalCount,
                stateName,
                go,
                select,
                pageChange,
                sortChange,
                handleClick,
                getOrderList
            };
        }
    });
</script>
<style lang="less" scoped>
    .form {
        label {
            width: 80px;
        }
        .el-input {
            width: 200px;
        }
    }
</style>
