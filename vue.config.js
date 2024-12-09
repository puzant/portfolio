const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.medium.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        logLevel: 'debug', // Helps in debugging proxy issues
      },
    }
  },
  transpileDependencies: true
})
