<template>
<v-toolbar>
<v-toolbar-side-icon>

</v-toolbar-side-icon>
<v-toolbar-title>
<g-link to="/" tag="span" style="cursor: pointer">   
        <h1 class="title mb-20" style="color:pink;">{{ $page.landingPage.fields.btnlogo }}</h1>
        </g-link>
</v-toolbar-title>
<v-spacer></v-spacer>
<v-toolbar-items class="hidden-sm-and-down">
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




</v-toolbar-items>
</v-toolbar>

</template>
