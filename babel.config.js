module.exports = function(api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      targets: {
        esmodules: true,
      },
      useBuiltIns: "entry",
      corejs: 3,
      modules: false,  // この行を確認
      exclude: ['transform-typeof-symbol']
    }],
    "@babel/preset-react"
  ];

  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
  ];

  return {
    presets,
    plugins
  };
}