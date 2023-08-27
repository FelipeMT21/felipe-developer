module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/videos/[name].[hash].[ext]",
          },
        },
      });
  
      return config;
    },
  };
  