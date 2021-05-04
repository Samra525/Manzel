<template>
  <Layout>
    <template slot="home">
      <section id="hero">
               <v-parallax :src="$page.landingPage.fields.image" width="720" height="500" fit="contain" >
          <v-row align="center" justify="center">
            <v-col cols="35">
              <div class="text-center">
                <h1 class="display-1 text-lg-h1 font-weight-thin mb-4" style="color:red;">
          {{ $page.landingPage.title }}
        </h1>
        <p style="color:red;">{{ $page.landingPage.fields.intro }}</p>
        <div class="text-center">
          <v-btn
      rounded
      color="yellow"
      dark
    >
      <g-link to="/About">   
            <strong>{{ $page.landingPage.fields.btnshare }} </strong>
      </g-link>
    </v-btn>
        </div>
      </div>
            </v-col>
          </v-row>
        </v-parallax>
      </section>
      <!-- <div class="Home">
      <div class="Home__hero mb-4 mb-md-5 mx-auto text-center">
        <h1 class="display-4">
          {{ $page.landingPage.title }}
        </h1>
        <p class="lead">
          {{ $page.landingPage.fields.intro }}
        </p>
      </div>
      </div>
      <div class="Home__media-blocks mb-5">
        <AppMediaBlock
          v-for="mediaBlock in $page.landingPage.fields.mediaBlocks"
          :key="mediaBlock._uid"
          v-bind="mediaBlock"
        />
      </div>
      <ul class="Home__teasers mb-5">
        <li
          v-for="teaser in $page.landingPage.fields.teasers"
          :key="teaser._uid"
        >
          <AppTeaser v-bind="teaser"/>
        </li>
      </ul>
    </div> -->
   </template>
</layout>
</template>

<page-query>
query LandingPage {
  landingPage(path: "home") {
    title
    fields{
      intro
      image
      btnhome
      btnlogo
      btncontact
      btnabout
      btnshare
      btnoffer
      footertext
      mediaBlocks {
      image
      image_position
      text
      title
    }
    teasers {
      image
      link
        {
    cached_url
          }
      text
      title
    }
    
  }
}
}
</page-query>
<script>
import AppMediaBlock from '../components/AppMediaBlock.vue';
import AppTeaser from '../components/AppTeaser.vue';
export default {
  components: {
    AppMediaBlock,
    AppTeaser,
  },
};
</script>
<style>
.Home__hero {
  max-width: 36em;
}
.Home__media-blocks > :not(:last-child) {
  margin-bottom: 4em;
}
.Home__teasers {
  display: flex;
  margin-top: -1em;
  margin-left: -1em;
  padding-left: 0;
  flex-wrap: wrap;
  list-style-type: none;
}
.Home__teasers > * {
  padding-top: 1em;
  padding-left: 1em;
  flex-basis: 16em;
  flex-grow: 9999;
}
</style>