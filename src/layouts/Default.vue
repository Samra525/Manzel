<template>
  <v-app>
     <!-- <AppBar /> -->
 <Navigation/> 
    <v-main>
      <slot name="home" />
      <v-container fluid>
        <v-row>
          <v-col sm="6" offset-sm="3">
            <slot />
          </v-col>
        </v-row>
           
      </v-container>
    
    </v-main>
       <Footer />
  </v-app>
</template>
 <script>
// import AppBar from '~/components/AppBar';
import Footer from '~/components/Footer';
 import Navigation from '../components/Navigation.vue';
 //import ContactForm from '../components/ContactForm.vue';

export default {
   components: {
    //AppBar,
      Footer,
      Navigation,
      //ContactForm
}
 };
 </script>