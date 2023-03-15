import { MockMethod } from 'vite-plugin-mock';

export default [
    {
        url: '/api/product/list',
        method: 'post',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {
                total: 8,
                pageSize: 1,
                dataList: [
                    { name: 'qqq', creatTime: '2022-10-20', count: Math.round(Math.random() * 10) },
                    { name: 'vvv', creatTime: '2022-10-21', count: Math.round(Math.random() * 10) }
                ]
            }
        }
    },
    {
        url: '/api/product/header',
        method: 'post',
        statusCode: 200,
        timeout: 2000,
        response: {
            code: 0,
            status: 'success',
            data: [
                {
                    prop: 'name',
                    label: '名称'
                },
                {
                    prop: 'count',
                    label: '数量'
                },
                {
                    prop: 'creatTime',
                    label: '创建时间'
                }
            ]
        }
    }
] as MockMethod[];
