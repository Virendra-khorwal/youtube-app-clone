module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: [
            "X_RAPIDAPI_KEY"
          ],
          blacklist: null, // DEPRECATED
          whitelist: null, // DEPRECATED
          safe: false,
          allowUndefined: false,
          verbose: false,
        },
      ],
    ],
  };
};
