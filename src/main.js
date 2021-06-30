import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'


Vue.use(VueFbCustomerChat, {
  page_id: 108019441538563, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });
  Vue.use(Vuetify)
  const opts = {}; //opts includes, vuetify themes, icons, etc.
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  

  
}


