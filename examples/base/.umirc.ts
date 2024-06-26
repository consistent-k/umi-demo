import { defineConfig } from "@umijs/max";

export default defineConfig({
  base: '/',
  publicPath: '/static-base-web/',
  outputPath: 'dist/static-base-web/',
  mfsu: {},
  hash: true,
  routes: [
    { path: "/", component: "index" },
    { path: "/child/*",  microApp: 'app1', }
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
        sandbox: {
            experimentalStyleIsolation: true
        }
    }
  },
  proxy: {
    '/static-child-web': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        secure: false
    }
  }
});
