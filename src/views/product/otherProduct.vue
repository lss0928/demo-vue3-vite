<template>
    <div class="row column" id="bg">
        <div class="callout">
            <h3>Really big special this week on items.</h3>
        </div>
    </div>

    <hr />

    <div class="row column text-center">
        <h2>热销TOP</h2>
        <hr />
    </div>

    <div class="row small-up-2 medium-up-3 large-up-6">
        <div class="column" v-for="(item, i) in productList" :key="i">
            <img class="thumbnail" src="@/assets/BaiduHi_2019-10-25_18-40-27.png" />
            <h5>Nulla At Nulla Justo, Eget</h5>
            <p>$400</p>
            <!-- <a href="#" class="button small expanded hollow">Buy</a> -->
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
<style scoped>
    #bg {
        background: url(@/assets/f1c1.png) no-repeat 0px 0px;
        background-size: cover;
        background-attachment: fixed;
    }
    .callout {
        height: 300px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
    }
</style>
