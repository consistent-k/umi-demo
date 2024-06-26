import { defineConfig } from "@umijs/max";

export default defineConfig({
  mfsu: {},
  hash: true,
  base: '/child',
  routes: [
    { path: "/", component: "index" },
    { path: "/detail", component: "detail" }
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