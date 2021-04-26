<template>
  <Layout>
    <template slot="home">
      <section id="hero">
         <v-parallax :src="require('@/assets/img/bgDownload.jpg')" height="400">
          <v-row align="center" justify="center">
            <v-col cols="12">
              <div class="text-center">
                <h1 class="display-1 text-lg-h1 font-weight-thin mb-4">
          {{ $page.landingPage.title }}
        </h1>
         <p>{{ $page.landingPage.intro }}</p>

      </div>
            </v-col>
          </v-row>
        </v-parallax>
      </section>
   </template>
  </Layout>
</template>

<page-query>
query LandingPage {
  landingPage(path: "about") {
    title
     fields{
      intro
      
    }
  }
}
</page-query>
