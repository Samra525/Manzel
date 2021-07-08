<template>
  <Layout>
    <template>
      <v-container>
<v-carousel cycle hide-delimiters
height="300px"
>
  <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    >
    </v-carousel-item>
  </v-carousel>
          
      </v-container>
  
        <main class="o-main">
                        
<div class="o-section">
    <div class="o-container o-container--smaller o-container--tablet-full u--align-center">
        <h1 class="c-headline--simple u--align-center text-center">
              {{  $page.landingPage.title }}      </h1>
    </div>
</div>

<div class="o-container o-container--smaller o-container--tablet-full u-bg-white">
    <div class="o-container__content">
        <span id="travel" class="c-anchor--small"></span>
        <section class="o-section c-post__about-us u--align-center">
            <h2 style="text-align: center;"><div class="c-post__quote"><strong>{{$page.landingPage.fields.intro}}</strong>
            <div class="c-post__quote-author"> {{$page.landingPage.fields.Text}} </div></div></h2>
            <p style="text-align: left;">

{{$page.landingPage.fields.text1}}
            </p>
 <h2 style="text-align: center;">
<div class="c-post__quote-author"> CURIOUS ABOUT OUR IMPACTS? </div></h2>

<p style="text-align: left;"><strong>{{$page.landingPage.fields.Description}}</strong><br>
<p style="text-align: left;"><strong>FIND OUT MORE ABOUT MANZEL</strong><br>
<a href="">Founders</a><br>
<a href="">Culture</a><br>
<a href="">Newsroom<br>
</a><a href="">Dream jobs<br>
</a><a href="">Inside Story</a></p>
<p style="text-align: left;">
</p>        </section>

        <section class="o-section u--align-center">
            <h2 class="c-headline--primary">
                Become the part of our story!            </h2>
            <p>
                <a target="_blank" href="" 
                class="c-btn c-btn--medium c-btn--blue c-btn--rounded">
                    Download App                </a>
               
            </p>
        </section>
    </div>
</div>
                    </main>
        
      
      <!-- <section id="hero">
               <v-parallax :src="$page.landingPage.fields.image" width="720" height="500" fit="contain" >
          <v-row align="center" justify="center">
            <v-col cols="35">
              <div class="text-center">
                <h1 class="display-1 text-lg-h1 font-weight-thin mb-4" style="color:red;">
          {{ $page.landingPage.title }}
        </h1>
        <p style="color:red;">{{ $page.landingPage.fields.intro }}</p>
        <div class="text-center">
          <v-btn
      rounded
      color="yellow"
      dark
    >
      <g-link to="/About">   
            <strong>{{ $page.landingPage.fields.btnshare }} </strong>
      </g-link>
    </v-btn>
        </div>
      </div>
            </v-col>
          </v-row>
        </v-parallax>
      </section> -->
      <!-- <div class="Home">
      <div class="Home__hero mb-4 mb-md-5 mx-auto text-center">
        <h1 class="display-4">
          {{ $page.landingPage.title }}
        </h1>
        <p class="lead">
          {{ $page.landingPage.fields.intro }}
        </p>
      </div>
      </div>
      <div class="Home__media-blocks mb-5">
        <AppMediaBlock
          v-for="mediaBlock in $page.landingPage.fields.mediaBlocks"
          :key="mediaBlock._uid"
          v-bind="mediaBlock"
        />
      </div>
      <ul class="Home__teasers mb-5">
        <li
          v-for="teaser in $page.landingPage.fields.teasers"
          :key="teaser._uid"
        >
          <AppTeaser v-bind="teaser"/>
        </li>
      </ul> -->

</template>
</layout>
</template>

<page-query>
query LandingPage {
  landingPage(path: "home") {
    title
    fields{
      intro
      image
      btnhome
      btnlogo
      btncontact
      btnabout
      btnshare
      btnoffer
      footertext
      Text
      Description
      text1
      mediaBlocks {
      image
      image_position
      text
      title
    }
    teasers {
      image
      link
        {
    cached_url
          }
      text
      title
    }
    
  }
}
}
</page-query>
<script>

export default {

  data() {
    return {
      items: [
        // {
        //   src: "//a.storyblok.com/f/110353/1920x840/f7ee4fb113/ride1artboard-5-100.jpg",
        // },
        {
          src: "//a.storyblok.com/f/110353/1288x564/3a7b67ff5e/download-1.jfif",
        },
        {
          src: "//a.storyblok.com/f/110353/1600x700/21600b6877/download-2.jfif",
        },
      ],
    };
  },
};
