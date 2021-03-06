const StoryblokClient = require(`storyblok-js-client`);

class StoryblokSource {
  static defaultOptions() {
    return {
      typeName: `StoryblokSource`,
      accessToken: undefined,
    };
  }

  constructor(api, options) {
    this.options = options;
    api.loadSource(args => this.fetchContent(args));
  }

  async fetchContent(store) {
    const { addContentType } = store;
    const { accessToken } = this.options;

    const client = new StoryblokClient({ accessToken });
    const response = await client.get(`cdn/stories`, {
      filter_query: {
        component: {
          in: `landing_page`,
        },
      },
    });

    const landingPages = addContentType({
      typeName: `LandingPage`,
    });

    response.data.stories.forEach((story) => {
      landingPages.addNode({
        fields: {
          intro: story.content.intro,
          footertext: story.content.footertext,
          image: story.content.image,
          Text: story.content.Text,
          Description: story.content.Description,
          btnhome: story.content.btnhome,
          btnabout: story.content.btnabout,
          btncontact: story.content.btncontact,
          btnlogo: story.content.btnlogo,
          btnshare: story.content.btnshare,
          subheading: story.content.subheading,
          btnoffer: story.content.btnoffer,
          mediaBlocks: story.content.media_blocks,
          teasers: story.content.teasers,
          formsections: story.content.formsections,
          text1: story.content.text1,
        },
        path: story.slug,
        title: story.content.title,
      });
    });
  }
}

module.exports = StoryblokSource;