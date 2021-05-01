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
          subheading: story.content.subheading,
          text: story.content.text,
          image: story.content.image,
          btnhome: story.content.btnhome,
          btnabout: story.content.btnabout,
          btncontact: story.content.btncontact,
          btnlogo: story.content.btnlogo,
          btnshare: story.content.btnshare,
          btnoffer: story.content.btnoffer,
          mediaBlocks: story.content.media_blocks,
          teasers: story.content.teasers,
        
        },
        path: story.slug,
        title: story.content.title,
      });
    });
  }
}

module.exports = StoryblokSource;