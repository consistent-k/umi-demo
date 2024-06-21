import { defineConfig } from "@umijs/max";

export default defineConfig({
  runtimePublicPath: {},
  headScripts: [`window.publicPath = '//localhost:8001/static-child-web/';`],
});