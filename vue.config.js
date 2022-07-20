const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/task-3/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: [
          '@use "sass:map";',
          '@use "sass:math";',
          '@import "@/assets/scss/helpers/_helpers.scss";',
        ].join(" "),
      },
    },
  },
});
