<template>
  <Layout>
    <v-container fluid>
        <v-row>
          <v-col sm="6" offset-sm="3">
    
        <h1>{{ $page.landingPage.title }}</h1>
        <p>{{ $page.landingPage.fields.intro }}</p>
         <h3 class="font-weight-light mt-3">
                {{ $page.landingPage.fields.subheading }}
              </h3>
              <h3 class="font-weight-light">
                Email: bricksiot@gmail.com
              </h3>
              <v-divider></v-divider>
        <ContactForm>
          
        </ContactForm>
            
          </v-col>
        </v-row>
           
      </v-container>
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
  landingPage(path: "contact-page") {
    title
    fields{
      intro
      btnhome
      btnlogo
      btncontact
      btnabout
      footertext
subheading
    }
  }
}
</page-query>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>