<template>
  <v-app>
      <!-- <AppBar />  -->
 <Navigation />
  <!-- <App/> -->
    <v-main>
      <slot name="home" />
      <v-container fluid>
        <v-row no-gutters>
          <v-col md="12">
      <slot/>
    </v-col>
        </v-row>
           
      </v-container>
    
    </v-main>
       <Footer />
  </v-app>
</template>
 <script>
//import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
import Navigation from '../components/Navigation.vue';
 //import ContactForm from '../components/ContactForm.vue';
//import App from '~/components/App.vue';
export default {
   components: {
    //AppBar,
 //App,
 Footer,
      Navigation
      //ContactForm
}
 };
 </script>