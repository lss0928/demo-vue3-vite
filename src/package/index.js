import ViteButton from '@/package/vite-button/index.vue';
import ViteZoom from '@/package/vite-zoom/index.vue';
const comps = [ViteButton, ViteZoom];

const install = function (Vue) {
    comps.forEach((comp) => {
        Vue.component(comp.name, comp);
    });
};

export default install;
