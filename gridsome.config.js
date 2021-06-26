const path = require(`path`);

module.exports = {
  siteName: `Manzel`,
  plugins: [
    {
      use: path.resolve(`./src/plugins/source-storyblok`),
      options: {
        accessToken: `jjA8CxiZxrvdyc83fNJmlgtt`,
      },
    },
  ],
};