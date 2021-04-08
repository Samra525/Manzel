<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Connect with us!</strong>

        <!-- <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon.to" class="mx-4" dark icon>
          <a :href="icon.to" target="_blank" rel="noopener noreferrer nofollow">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </a>
        </v-btn> -->
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Have a safe ride with us</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
    //   icons: [
    //     {
    //       to: 'your LinkedIn URL here (or any social platform you want)',
    //       icon: 'mdi-linkedin'
    //     },
    //     { to: 'https://github.com/your-github/', icon: 'mdi-github' }
    //   ]
    };
  }
};
</script>

<style scoped>
.v-btn a {
  text-decoration: none;
  color: white;
}
</style>