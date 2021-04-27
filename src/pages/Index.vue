<template>
  <Layout>
    
    <template slot="home">
      <section id="hero">
               <v-parallax :src="$page.landingPage.fields.image" width="720" height="500" fit="contain" >
          <v-row align="center" justify="center">
            <v-col cols="35">
              <div class="text-center">
                <h1 class="display-1 text-lg-h1 font-weight-thin mb-4">
          {{ $page.landingPage.title }}
        </h1>
        <!-- <p>{{ $page.landingPage.fields.intro }}</p>
        <p>{{ $page.landingPage.fields.subheading }}</p>
        <p>{{ $page.landingPage.fields.text }}</p> -->
      </div>
            </v-col>
          </v-row>
        </v-parallax>
      </section>
   </template>
</layout>
</template>

<page-query>
query LandingPage {
  landingPage(path: "home") {
    title
    fields{
      intro
      subheading
      text
      image
    }
  }
}
</page-query>
