<template>
  <Layout>
    <section id="hero">
      <v-parallax
  :src="$page.landingPage.fields.image" fit="contain"
  >

              <div class="text-center">
                <h1 class="display-1 text-lg-h1 font-weight-thin mb-4" style="color:White;">
          {{ $page.landingPage.title }}
        </h1>
        <p style="color:white;">{{ $page.landingPage.fields.intro }}</p>
        <div class="text-center">
          <v-btn text>
      <g-link  style="text-decoration: none; color: white" to="/About">   
            <strong>{{ $page.landingPage.fields.btnshare }} </strong>
      </g-link>
    </v-btn>
        </div>
      </div>
            
        </v-parallax>
      </section>
     

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
      Text
      Description
      text1
     
  }
}
}
</page-query>
