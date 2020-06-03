<template>
  <section>
        <div class="page-wrap">
          <Header />

          <!-- Mobile View  -->
          <mq-layout mq="sm">
            <TitleMobile title="CAMPAIGNS" class="margin-top-header"/>
            <DetailsMobile
                :title="campaigns.fields.campaignsTitle"
                :description="campaigns.fields.description"
            />
            <ProductCard 
                :thumbnail="campaigns.fields.thumbnailPicture.fields.file.url"
            />
            <PictureCard 
                v-for="item in campaigns.fields.galery"
                :picture="item.fields.file.url"
                :key="item"
            />
            <LookbookMobile class="border-top">
                  <LookbookCard 
                              v-for="(item, index) in items"
                              :thumbnail="item.fields.thumbnailPicture.fields.file.url"
                              :title="item.fields.item"
                              :price="item.fields.price"
                              :slug="item.fields.slug"
                              :key="index"
                            />
            </LookbookMobile>
            <StoriesMobile>
                  <Stories
                                v-for="(storieItem, index) in storieItems"
                                :thumbnail="storieItem.fields.image.fields.file.url"
                                :title="storieItem.fields.title"
                                :key="index"
                              />
            </StoriesMobile>
            <InstagramMobile />
          </mq-layout>

          <!-- Desktop View  -->
          <mq-layout mq="lg">
            <Titles />
            <b-container fluid class="app_page">
              <b-row>
                <div id="scroll-area">
                  <b-row>
                      <b-col cols="6" class="border-right">
                        <b-row>
                          <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/assets/medeea_showroom_1.jpg"/>

                        </b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="3" class="border-right sticky pt-3 pb-4 padding-left">
                          <p class="uppercase">
                            Str. Londra 28<br>
                            Monday to Friday<br>
                            11:00–19:00

                           </p>
                          <div class="pt-1">
                              <p class="mb-0 pb-0 uppercase"> 
                              contact@medeeaene.com<br>
                              +40 754 633 332
                              </p>
                          </div>
                      </b-col>
                      <b-col cols="3" class="sticky pt-3 pb-4 padding-left">
                          <router-link to="/home">
                                    <p>BACK</p>
                          </router-link>
                      </b-col>  
                  </b-row> 
                  <b-row>
                      <b-col cols="12" class="" >
                        <b-row class="first">
                          <b-col cols="6" class="pic-card border-top">
            
                            <img class="image" src="~/assets/medeea_showroom_2.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top shadow-left">
            
                            <img class="image" src="~/assets/medeea_showroom_3.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top">
            
                            <img class="image" src="~/assets/medeea_showroom_4.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top shadow-left">
            
                            <img class="image" src="~/assets/medeea_showroom_5.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top">
            
                            <img class="image" src="~/assets/medeea_showroom_6.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top shadow-left">
            
                            <img class="image" src="~/assets/medeea_showroom_7.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top">
            
                            <img class="image" src="~/assets/medeea_showroom_8.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top shadow-left">
            
                            <img class="image" src="~/assets/medeea_showroom_9.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top">
            
                            <img class="image" src="~/assets/medeea_showroom_10.jpg"/>

                          </b-col>
                          <b-col cols="6" class="pic-card border-top shadow-left">
            
                            <img class="image" src="~/assets/medeea_showroom_11.jpg"/>

                          </b-col>
                        </b-row> 
                      </b-col>
                  </b-row>
                </div>
              </b-row>
            </b-container>
          </mq-layout>
        </div>
        <Footer />   
  </section>
</template>

<script>
  import Header from '@/components/Header'
  import Titles from '@/components/Titles'
  import Footer from '@/components/Footer'
  import ProductCard from '@/components/ProductCard'
  import LookbookCard from '@/components/LookbookCard'
  import CampaignCard from '@/components/CampaignCard'
  import TitleMobile from '@/components/mobile/TitleMobile'
  import DetailsMobile from '@/components/mobile/DetailsMobile'
  import PictureCard from '@/components/mobile/PictureCard'
  import LookbookMobile from '@/components/mobile/LookbookMobile'
  import StoriesMobile from '@/components/mobile/StoriesMobile'
  import InstagramMobile from '@/components/mobile/InstagramMobile'
  import { createClient } from '@/plugins/contentful'
  import Stories from '@/components/Stories'

  import VueMarkdown from 'vue-markdown'

  const contentfulClient = createClient()

  


  export default {
      components: {
        Header,
        Titles,
        Footer,
        ProductCard,
        LookbookCard,
        CampaignCard,
        TitleMobile,
        DetailsMobile,
        PictureCard,
        LookbookMobile,
        StoriesMobile,
        InstagramMobile,
        VueMarkdown,
        Stories
    },
    name: 'index',
    asyncData ({ env, params }) {
      return Promise.all([
         // fetch all lookbook items sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'lookbook',
          order: '-sys.createdAt'
        }),
        contentfulClient.getEntries({
        'content_type': 'campaigns',
        'fields.slug': params.slug
         }),
         // fetch all stories items sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'stories',
          order: '-sys.createdAt'
        })
      ]).then(([lookbooks, campaigns, stories]) => {
        return {
          items: lookbooks.items,
          campaigns: campaigns.items[0],
          storieItems: stories.items,
        }
      }).catch(console.error)
    }
  }

 

</script>


<style>

.shadow-left{
  -webkit-box-shadow: -1px 0px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: -1px 0px 0px 0px rgba(0,0,0,1);
  box-shadow: -1px 0px 0px 0px rgba(0,0,0,1);
}

.sticky{
  height: 91vh;
  position: sticky;
  top: 0;
}

.container {
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}




.app_page {
    margin: 0%;
    overflow: hidden;
    min-height: calc(100vh - 141px);
    margin-top: 112px;
}

::-webkit-scrollbar {
    display: none;
}

@media (min-width: 768px) {
    #scroll-area {
        max-height: 90vh;
        bottom: 0;
        left: 0;
        padding: 0 15px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

   
}

</style>
