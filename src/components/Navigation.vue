<template>
    <v-app-bar
    app
      color="green"
      :flat="flat"
      class="px-20"
      :class="{ expand: flat }">
      <v-toolbar-title>   <g-link style="text-decoration: none;" to="/">  
        <h1 class="title mb-20" style="color:black;">Manzel</h1> 
        <h1 class="body-1 mb-20" style="color:white;">{{ $page.landingPage.fields.btnlogo }}</h1>
        </g-link></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
    
        <v-btn text>
            <g-link style="text-decoration: none; color: inherit" to="/">
            {{ $page.landingPage.fields.btnhome }}
            </g-link></v-btn>

        <v-btn text><g-link style="text-decoration: none; color: inherit" to="/about">{{ $page.landingPage.fields.btnabout }}</g-link></v-btn>
        <v-btn text><g-link style="text-decoration: none; color: inherit" to="/contact">{{ $page.landingPage.fields.btncontact }}</g-link></v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/contact">Contact</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
  })
};
</script>
