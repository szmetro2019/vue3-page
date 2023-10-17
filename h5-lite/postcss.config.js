module.exports = {
  plugins: {
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    "cnjm-postcss-px-to-viewport": {
      viewportWidth: 375, // 根据设计稿设定
      minPixelValue: 1, // 最小的转换数值
      unitPrecision: 2 // 转化精度，转换后保留位数
    },
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    },
    // "postcss-mobile-forever": {
    //   viewportWidth: 375,
    //   appSelector: "#app",
    //   maxDisplayWidth: 600,
    //   enableMediaQuery: true,
    //   desktopWidth: 600,
    //   landscapeWidth: 425,
    //   border: true
    // }
  }
};
