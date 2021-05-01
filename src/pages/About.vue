
<template>
  <Layout>
    <template slot="home">
      <section id="hero">
         <v-parallax :src="$page.landingPage.fields.image" width="720" height="500" fit="contain" >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <div class="text-center">
                <h1 class="display-1 text-lg-h1 font-weight-thin mb-4">
          {{ $page.landingPage.title }}
        </h1>
         <h2>{{ $page.landingPage.fields.intro }}</h2>
          <p>{{ $page.landingPage.fields.subheading }}</p>
        <p>{{ $page.landingPage.fields.btnhome }}</p>
      

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
      subheading
      text
      image
      btnhome
      btnlogo
      btncontact
      btnabout
    }
  }
}
</page-query>
