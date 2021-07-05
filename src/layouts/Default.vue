<template>
  <v-app>
      <!-- <AppBar />  -->
 <Navigation />
  <!-- <App/> -->
    <v-main>
      <slot name="home" />
      <v-container fluid >
        <v-row>
           <v-col xs="6" offset-xs="3">
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