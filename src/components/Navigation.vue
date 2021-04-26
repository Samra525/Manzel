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
        <v-img src="@/assets/img/logo.png" max-width="50px" />
        <h1>  <span class="mr-2">Manzel</span></h1>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#features')">
      <g-link to="/">   
          <span class="mr-2">Home</span>
      </g-link>
    </v-btn>

        <v-btn text @click="$vuetify.goTo('#features')">
      <g-link to="/About">   
          <span class="mr-2">About us</span>
      </g-link>
    </v-btn>
         <v-btn text @click="$vuetify.goTo('#features')">
      <g-link to="/Contact">   
          <span class="mr-2">Contact us</span>
      </g-link>
    </v-btn>
         <!-- <v-btn text @click="$vuetify.goTo('#features')">
      <g-link to="/samra">   
          <span class="mr-2">Samra</span>
      </g-link>
    </v-btn> -->
    
                  </div>
    </v-app-bar>
  </div>
</template>


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
