import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/api/order/list',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {
                total: 10,
                pageSize: 1,
                pageNumber: 10,
                dataList: [
                    {
                        orderId: '21212',
                        customerId: '11',
                        customer: '张三',
                        address: '福建省',
                        provider: '供应商A',
                        orderRemark: '文具',
                        createTime: '2022-10-20 12:30:45',
                        updateTime: '2022-10-20 12:30:46',
                        updateName: '王武',
                        list: [
                            {
                                id: '333',
                                name: 'A',
                                unit: '件',
                                count: 1,
                                remark: 'aaa'
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        url: '/api/customer/list',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {
                total: 10,
                pageSize: 1,
                pageNumber: 10,
                dataList: [
                    {
                        id: '11',
                        name: '张三',
                        address: '',
                        provider: '',
                        orderRemark: ''
                    }
                ]
            }
        }
    },
    {
        url: '/api/order/add',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {}
        }
    },
    {
        url: '/api/order/del',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {}
        }
    },
    {
        url: '/api/order/detail',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {
                orderId: '21212',
                customerId: '11',
                customer: '张三',
                address: '福建省',
                provider: '供应商A',
                orderRemark: '文具',
                createTime: '2022-10-20 12:30:45',
                updateTime: '2022-10-20 12:30:46',
                updateName: '王武',
                list: [
                    {
                        id: '333',
                        name: 'A',
                        unit: '件',
                        count: 1,
                        remark: 'aaa'
                    }
                ]
            }
        }
    },
    {
        url: '/api/order/update',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {}
        }
    }
];
