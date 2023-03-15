var path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
export default defineConfig((config) => {
    return {
        publicPath: './',
        outputDir: 'dist',
        resolve: {
            alias: {
                package: path.resolve(__dirname, './src/package'),
                '@': path.resolve(__dirname, 'src') //  模块路径别名必须以 / 开头和结尾，不然 vite 没法识别。
            }
        },
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `@import "@/style/index.less";@import "@/package/style/index.less";`
                    // javascriptEnabled: true
                }
            }
            // postcss: {
            //     plugins: [
            //       require('autoprefixer')({
            //         overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
            //       })
            //     ]
            //   }
        },
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'less',
                patterns: [path.resolve(__dirname, './src/style/index.less')]
            }
        },
        server: {
            hmr: true,
            proxy: {}
        },
        plugins: [
            vue(),
            viteMockServe({
                mockPath: './src/mock',
                localEnabled: config.command === 'serve',
                watchFiles: true // 监视⽂件更改，并重新加载 mock 数据

                // injectCode: `
                //     import { setupProdMockServer } from './mockProdServer';
                //     setupProdMockServer();
                // `
            })
        ]
    };
});
