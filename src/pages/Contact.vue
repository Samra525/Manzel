<template>
  <Layout>
        <h1>{{ $page.landingPage.title }}</h1>
        <p>{{ $page.landingPage.fields.intro }}</p>
         <h3 class="font-weight-light mt-3">
                {{ $page.landingPage.fields.subheading }}
              </h3>
              <h3 class="font-weight-light">
                Email: xyz@gmail.com
              </h3>
              <v-divider></v-divider>
        <ContactForm>
          
        </ContactForm>
       
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