<template>
    <v-app-bar
    app
      color="indigo accent-4"
      :flat="flat"
      class="px-15"
      :class="{ expand: flat }"

    >  
      <v-toolbar-title>
        <g-link to="/" tag="span" style="cursor: pointer">   
        <h1 class="title mb-20" style="color:black;">{{ $page.landingPage.fields.btnlogo }}</h1>
        </g-link>
      </v-toolbar-title>
      <v-spacer />
      
      <v-app-bar-nav-icon
          @click="drawer = true"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else >

        <v-btn 
      class="mx-2"
         depressed
      color="error"
 

>
      
      <g-link to="/" >   
          <span class="mr-2">{{ $page.landingPage.fields.btnhome }}</span>
      </g-link>
    </v-btn>

        <v-btn class=" mx-2"
        depressed
      color="error">
      <g-link to="/About">   
          <span class="mr-2">{{ $page.landingPage.fields.btnabout }}</span>
      </g-link>
    </v-btn>
         <v-btn  class=" mx-2"
        depressed
      color="error">
      <g-link to="/Contact">   
          <span class="mr-2">{{ $page.landingPage.fields.btncontact }}</span>
      </g-link>
    </v-btn>
      </div>



      <v-navigation-drawer v-model="drawer" 
      absolute
      temporary
      width="100%">
            <v-list nav dense>
              <v-list-item-group v-model="group" active-class="deep-white--text text--accent-4">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <g-link to="/"> 
                  <v-list-item-title>{{ $page.landingPage.fields.btnhome }}</v-list-item-title>  </g-link>


<v-list-item-icon>
                    <v-icon>mdi-about</v-icon>
                  </v-list-item-icon>
                  <g-link to="/about"> 
                  <v-list-item-title>{{ $page.landingPage.fields.btnabout }}</v-list-item-title>  </g-link>

<v-list-item-icon>
                    <v-icon>mdi-contact</v-icon>
                  </v-list-item-icon>
                  <g-link to="/contact"> 
                  <v-list-item-title>{{ $page.landingPage.fields.btncontact }}</v-list-item-title>  </g-link>


                </v-list-item>
              </v-list-item-group>
            </v-list>

          </v-navigation-drawer>
    </v-app-bar>
  
</template>
<page-query>
query LandingPage {
  landingPage(path: "buttons-name") {
    title
    fields{
      btnlogo
      btnhome
      btnabout
      btncontact
      
    }
  }
}
</page-query>
<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "About", "#features"],
      ["mdi-download-box-outline", "Contact", "#download"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
