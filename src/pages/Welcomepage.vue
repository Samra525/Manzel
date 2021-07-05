<template>
<v-container fluid >
        <v-row>
           <v-col xs="6" offset-xs="3">
    
         <v-parallax :src="$page.landingPage.fields.image" width="720" height="500" fit="contain">
          
              <div class="text-center" align-center>
                <h1 class="align-center size-big">
          {{ $page.landingPage.title }}
        </h1>
        <p style="color:red;">{{ $page.landingPage.fields.intro }}</p>
        <div class="text-center">
          <v-btn
      rounded
      color="yellow"
      dark
    >
      <g-link to="/">   
            <strong>Manzel </strong>
      </g-link>
    </v-btn>
        </div>
      </div>
        </v-parallax>
    
           </v-col>
        </v-row>
</v-container>
</template>

$page.landingPage.fields.image

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
