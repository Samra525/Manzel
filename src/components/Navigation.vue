<template>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >


      <v-toolbar-title>
        <g-link to="/">   
        <h1 class="title mb-5">{{ $page.landingPage.fields.btnlogo }}</h1>
        </g-link>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn  rounded
      color="green"
      dark>
      <g-link to="/">   
          <span class="mr-2">{{ $page.landingPage.fields.btnhome }}</span>
      </g-link>
    </v-btn>

        <v-btn  rounded
      color="yellow"
      dark>
      <g-link to="/About">   
          <span class="mr-2">{{ $page.landingPage.fields.btnabout }}</span>
      </g-link>
    </v-btn>
         <v-btn  rounded
      color="orange"
      dark>
      <g-link to="/Contact">   
          <span class="mr-2">{{ $page.landingPage.fields.btncontact }}</span>
      </g-link>
    </v-btn>
      </div>
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
