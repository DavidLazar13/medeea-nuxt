<template>
  <section>
        <div class="page-wrap">
          <Header />
            <!-- Mobile View  -->
            <mq-layout mq="sm">
                <LookbookMobile class="margin-top-header">
                  <LookbookCard 
                              v-for="(item, index) in items"
                              :thumbnail="item.fields.thumbnailPicture.fields.file.url"
                              :title="item.fields.itemsTitle"
                              :price="item.fields.price"
                              :slug="item.fields.slug"
                              :key="index"
                            />
                  <div v-if="items.length < entries - (storieItems.length + campaignItems.length)" class="load-more-btn text-center d-flex justify-content-center align-items-center" @click="loadMore()"><span>LOAD MORE</span></div>
                </LookbookMobile>
                <CampaignsMobile>
                  <CampaignsCard
                                v-for="(campaignItem, index) in campaignItems"
                                :thumbnail="campaignItem.fields.thumbnailPicture.fields.file.url"
                                :title="campaignItem.fields.campaignsTitle"
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
                <ShowroomMobile />
                  
                <InstagramMobile />
            </mq-layout>
            
            <!-- Desktop View  -->
            <mq-layout mq="lg">
                <Titles />
                <b-container fluid class="app_page">
                    <b-row>
                        <b-col cols="12" md="6" id="left" class="">
                          <b-row class="first">
                            <LookbookCard
                              class="lookbook-card" 
                              v-for="(item, index) in items"
                              :thumbnail="item.fields.thumbnailPicture.fields.file.url"
                              :title="item.fields.itemsTitle"
                              :price="item.fields.price"
                              :slug="item.fields.slug"
                              :key="index"
                            />
                            <div v-if="items.length < entries - (storieItems.length + campaignItems.length)" class="load-more-btn text-center d-flex justify-content-center align-items-center border-right pointer" @click="loadMore()"><span>LOAD MORE</span></div>
                          </b-row>
                         
                        </b-col>
                        <b-col cols="12" md="3" class="border-right" id="middle">
                          <b-row>
                            <CampaignsCard
                                v-for="(campaignItem, index) in campaignItems"
                                :thumbnail="campaignItem.fields.thumbnailPicture.fields.file.url"
                                :title="campaignItem.fields.campaignsTitle"
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
  import ShowroomMobile from '@/components/mobile/ShowroomMobile'
  import { createClient } from '../plugins/contentful'

  const contentfulClient = createClient()
  const skipAmount = 0;
  

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
      InstagramMobile,
      ShowroomMobile
    },
    // asyncData ({env}) {
    //   return Promise.all([
    //     // fetch all lookbook items sorted by creation date
    //     contentfulClient.getEntries({
    //       'content_type': 'lookbook',
    //       order: '-sys.createdAt',
    //       "limit": 10,
    //     }),
    //      // fetch all campaigns items sorted by creation date
    //     contentfulClient.getEntries({
    //       'content_type': 'campaigns',
    //       order: '-sys.createdAt'
    //     }),
    //      // fetch all stories items sorted by creation date
    //     contentfulClient.getEntries({
    //       'content_type': 'stories',
    //       order: '-sys.createdAt'
    //     })
    //   ]).then(([lookbooks, campaigns, stories]) => {
    //     // return data that should be available
    //     // in the template
    //     return {
    //       items: lookbooks.items,
    //       campaignItems: campaigns.items,
    //       storieItems: stories.items,
    //     }
    //   }).catch(console.error)
    // },
    data: function() {
      return {
        items:[],
        campaignItems: [],
        storieItems: [],
        entries: "",
      }
    },
    mounted(){
      this.loadMore(0),
      this.getData()
    },
    methods:{
      getData() {
        return Promise.all([
          contentfulClient.getEntries(),
          // fetch all campaigns items sorted by creation date
          contentfulClient.getEntries({
            'content_type': 'campaigns',
            order: '-sys.createdAt'
          }),
          // fetch all stories items sorted by creation date
          contentfulClient.getEntries({
            'content_type': 'stories',
            order: '-sys.createdAt'
          })
        ]).then(([entries, campaigns, stories]) => {
          // return data that should be available
          // in the template
          this.entries = entries.total
          this.campaignItems= [
            ...campaigns.items
          ]
          this.storieItems=[
            ...stories.items
          ]
          
          // console.log(this.entries - (this.storieItems.length + this.campaignItems.length) )
          // console.log(this.storieItems.length + this.campaignItems.length),
          // console.log(this.entries.total)
        
          
        }).catch(console.error)
      },
      loadMore() {
       return Promise.all([
        // fetch all lookbook items sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'lookbook',
          order: '-sys.createdAt',
          "limit": 10,
          "skip": this.items.length,
        }) 
      ]).then(lookbooks => {
        // return data that should be available
        // in the template    
          this.items= [
            ...this.items,
            ...lookbooks[0].items
          ]
          // console.log(this.items.length)
      })
      
    }
  }
  }
   

</script>

<style>
.pointer {cursor: pointer;}
</style>
