<template>
  <v-footer dark padless
>
    <v-card flat tile class="flex white--text text-center" 
    color="green">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class=" white--text pt-0">
        {{ $page.landingPage.fields.footertext }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="py-2 white--text">
        {{ new Date().getFullYear() }} — <strong> {{ $page.landingPage.fields.footertext }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<page-query>
query LandingPage {
  landingPage(path: "footer") {
     title
    fields{
      intro
      image
      btnhome
      btnlogo
      btncontact
      btnabout
      footertext
}
  }
}
</page-query>
<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/ManzelApp/",
      },
      {
        text: "mdi-twitter",
        link: "https://twitter.com/",
      },
      {
        text: "mdi-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/",
      },
    ],
  }),
};
</script>
