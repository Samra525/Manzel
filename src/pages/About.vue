<template>
  <Layout>
    <div class="About">
      <div class="About__hero mb-4 mb-md-5 mx-auto text-center">
        <h1 class="display-4">
          {{ this.$page.landingPage.title }}
        </h1>
        <h2 class="lead">
          {{ this.$page.landingPage.fields.intro }}
        </h2>
      </div>

      <!-- <div class="About__media-blocks mb-5">
        <AppMediaBlock
          v-for="mediaBlock in this.$page.landingPage.fields.mediaBlocks"
          :key="mediaBlock._uid"
          v-bind="mediaBlock"
        />
      </div>
      <ul class="About__teasers mb-5">
        <li
          v-for="teaser in this.$page.landingPage.fields.teasers"
          :key="teaser._uid"
        >
          <AppTeaser v-bind="teaser"/>
        </li>
      </ul>
    </div> -->
    </div>
    <!-- Load Facebook SDK for JavaScript -->
    <div class="fb-messengermessageus"
         messenger_app_id="95100348886"
         page_id="113418543692422"
         color="blue"
         size="large">
    </div>
  </Layout>
</template>



<page-query>
query LandingPage {
  landingPage(path: "about") {
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
  }
}
}
</page-query>


<style>
.About__hero {
  max-width: 36em;
}
.About__media-blocks > :not(:last-child) {
  margin-bottom: 4em;
}
.About__teasers {
  display: flex;
  margin-top: -1em;
  margin-left: -1em;
  padding-left: 0;
  flex-wrap: wrap;
  list-style-type: none;
}
.About__teasers > * {
  padding-top: 1em;
  padding-left: 1em;
  flex-basis: 16em;
  flex-grow: 9999;
}

</style>