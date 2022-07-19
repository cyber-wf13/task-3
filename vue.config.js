const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: [
          '@use "sass:map";',
          '@use "sass:math";',
          '@import "@/assets/scss/helpers/_helpers.scss";',
        ].join(" "),
      }
    }
  }
})
