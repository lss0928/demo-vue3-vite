import { createRouter, createWebHashHistory } from 'vue-router';
import Product from '@/views/product/index.vue';
import Order from '@/views/order/index.vue';
import Detail from '@/views/order/detail.vue';
import Staf from '@/views/staf/index.vue';
let routes = [
    {
        path: '/',
        name: 'Product',
        title: '产品',
        icon: 'Menu',
        component: Product
    },
    {
        path: '/order',
        name: 'Order',
        title: '订单',
        icon: 'Location',
        component: Order,
        children: [
            {
                path: '/detail',
                name: 'OrderDetail',
                title: '详情',
                component: Detail
            }
        ]
    },
    {
        icon: 'Document',
        path: '/staf',
        name: 'staf',
        title: '员工',
        component: Staf
    }
];

export default createRouter({
    routes,
    history: createWebHashHistory() // process.env.BASE_URL
});
