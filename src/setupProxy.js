const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/keypress",
        createProxyMiddleware({
            target: "http://192.168.1.118:8060",
            changeOrigin: true,
        })
    );
};
