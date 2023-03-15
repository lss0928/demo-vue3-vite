<template>
    <div class="row column text-center">
        <h2>新产品</h2>
        <hr />
    </div>

    <div class="row small-up-2 large-up-4">
        <div class="column" v-for="(item, i) in productList" :key="i">
            <img class="thumbnail" src="@/assets/BaiduHi_2019-10-25_18-40-27.png" />
            <h5>{{ item.name }}</h5>
            <p>{{ item.desc }}</p>
            <!-- <a href="#" class="button expanded">Buy</a> -->
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, reactive, toRefs } from 'vue';

    export default defineComponent({
        setup() {
            let data = reactive({
                productList: [
                    {
                        name: 'Nulla At Nulla Justo, Eget',
                        desc: 'Nulla At Nulla Justo, Eget',
                        src: 'BaiduHi_2019-10-25_18-40-27.png'
                    },
                    {
                        name: 'Nulla At Nulla Justo, Eget',
                        desc: 'Nulla At Nulla Justo, Eget',
                        src: 'BaiduHi_2019-10-25_18-40-27.png'
                    },
                    {
                        name: 'Nulla At Nulla Justo, Eget',
                        desc: 'Nulla At Nulla Justo, Eget',
                        src: 'BaiduHi_2019-10-25_18-40-27.png'
                    },
                    {
                        name: 'Nulla At Nulla Justo, Eget',
                        desc: 'Nulla At Nulla Justo, Eget',
                        src: 'BaiduHi_2019-10-25_18-40-27.png'
                    }
                ]
            });
            return {
                ...toRefs(data)
            };
        }
    });
</script>
