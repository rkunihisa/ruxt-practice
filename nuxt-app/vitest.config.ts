import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue() // Vueファイルを解析するプラグイン
    ],
    test: {
        environment: 'jsdom', // Vueコンポーネントのテストに必要
    },
});
