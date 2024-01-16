const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/home",
    createProxyMiddleware({
      target:
        "http://k8s-stage-game2049-bb9247bafa-590478206.ap-northeast-2.elb.amazonaws.com:8080",
      changeOrigin: true,
    })
  );
};
