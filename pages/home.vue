<template>
  <section>
        <div class="page-wrap">
          <Header />
            <!-- Mobile View  -->
            <mq-layout mq="sm">
                <LookbookMobile class="margin-top">
                  <LookbookCard 
                              v-for="(item, index) in items"
                              :thumbnail="item.fields.thumbnailPicture.fields.file.url"
                              :title="item.fields.item"
                              :price="item.fields.price"
                              :slug="item.fields.slug"
                              :key="index"
                            />
                </LookbookMobile>
                <CampaignsMobile>
                  <CampaignsCard
                                v-for="(campaignItem, index) in campaignItems"
                                :thumbnail="campaignItem.fields.thumbnailPicture.fields.file.url"
                                :title="campaignItem.fields.campaignTitle"
                                :slug="campaignItem.fields.slug"
                                :key="index"
                              />  
                </CampaignsMobile>
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
                        <b-col cols="12" md="6" class="" id="left">
                          <b-row>
                            <LookbookCard 
                              v-for="(item, index) in items"
                              :thumbnail="item.fields.thumbnailPicture.fields.file.url"
                              :title="item.fields.item"
                              :price="item.fields.price"
                              :slug="item.fields.slug"
                              :key="index"
                            />
                          </b-row>
                        </b-col>
                        <b-col cols="12" md="3" class="border-right" id="middle">
                          <b-row>
                            <CampaignsCard
                                v-for="(campaignItem, index) in campaignItems"
                                :thumbnail="campaignItem.fields.thumbnailPicture.fields.file.url"
                                :title="campaignItem.fields.campaignTitle"
                                :slug="campaignItem.fields.slug"
                                :key="index"
                              />   
                          </b-row>
                        </b-col>
                        <b-col cols="12" md="3" id="right">
                            <b-row>
                              <Stories
                                v-for="(storieItem, index) in storieItems"
                                :thumbnail="storieItem.fields.image.fields.file.url"
                                :title="storieItem.fields.title"
                                :key="index"
                              />
                            </b-row>
                        </b-col> 
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
  import LookbookCard from '@/components/LookbookCard'
  import CampaignsCard from '@/components/CampaignsCard'
  import Stories from '@/components/Stories'
  import Footer from '@/components/Footer'
  import LookbookMobile from '@/components/mobile/LookbookMobile'
  import CampaignsMobile from '@/components/mobile/CampaignsMobile'
  import StoriesMobile from '@/components/mobile/StoriesMobile'
  import InstagramMobile from '@/components/mobile/InstagramMobile'
  import { createClient } from '../plugins/contentful'
  
  const contentfulClient = createClient()
  export default {
    components: {
      Header,
      Titles,
      LookbookCard,
      CampaignsCard,
      Stories,
      Footer,
      LookbookMobile,
      CampaignsMobile,
      StoriesMobile,
      InstagramMobile
    },
    asyncData ({env}) {
      return Promise.all([
        // fetch all lookbook items sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'lookbook',
          order: '-sys.createdAt'
        }),
         // fetch all campaigns items sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'campaigns',
          order: '-sys.createdAt'
        }),
         // fetch all campaigns items sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'stories',
          order: '-sys.createdAt'
        })
      ]).then(([lookbooks, campaigns, stories]) => {
        // return data that should be available
        // in the template
        return {
          items: lookbooks.items,
          campaignItems: campaigns.items,
          storieItems: stories.items,
        }
      }).catch(console.error)
    }
  }
   

</script>


<style>
.margin-top{
        margin-top: 85px;
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
    
}

.font-size-32{
    font-size: 18px;
}

::-webkit-scrollbar {
    display: none;
}

@media (min-width: 768px) {
    #left {
        max-height:90vh;
        bottom: 0;
        
       
        overflow-y: scroll;
    }

    #middle {
        max-height:90vh;
        bottom: 0;
    
       
        overflow-y: scroll;
    }

    #right {
        max-height:90vh;
        bottom: 0;
        overflow-y: scroll;
        
    }

}

 @media only screen and (max-width: 600px) {
    .page-wrap {
      min-height: 100%;
      margin-bottom: 245px;
    }
 }


    #left {
        height: auto;
    }

    #middle {
        height: auto;
    }

    #right {
        height: auto;
    }

    h4 {
        padding: 10px 0;
    }


    a:link {
      text-decoration: none;
      color:black!important;
      cursor:default
    }

    a:visited {
      text-decoration: none;
      color:black;
    }

    a:hover {
      text-decoration: none;
      color:black;
    }

    a:active {
      text-decoration: none;
      color:black;
    }

  

</style>
