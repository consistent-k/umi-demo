import { defineConfig } from "@umijs/max";

export default defineConfig({
  base: '/child-web',
  publicPath: '/static-child-web/',
  routes: [
    { path: "/", component: "index" }
  ],
  npmClient: 'pnpm',
  qiankun: {
    slave: {
        sandbox: {
            experimentalStyleIsolation: true
        }
    }
  }  
});