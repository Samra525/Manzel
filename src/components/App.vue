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



      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
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