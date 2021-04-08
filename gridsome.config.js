const path = require(`path`);

module.exports = {
  siteName: `Building a Static Site with Storyblok and Gridsome`,
  plugins: [
    {
      use: path.resolve(`./src/plugins/source-storyblok`),
      options: {
        accessToken: `jjA8CxiZxrvdyc83fNJmlgtt`,
      },
    },
  ],
};