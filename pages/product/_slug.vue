<template>
  <section>
        <div class="page-wrap">
          <Header />
          <mq-layout mq="sm">
            <TitleMobile title="LOOKBOOK" class="margin-top-header"/>
            <DetailsMobile
              :title="lookbook.fields.item"
              :price="lookbook.fields.price"
              :description="lookbook.fields.description"
            />
            <PictureCard 
              v-for="item in lookbook.fields.presentationPictures"
              :picture="item.fields.file.url"
              :key="item"
            />
            <CampaignsMobile />
            <StoriesMobile />
            <InstagramMobile />
          </mq-layout>
          
          <mq-layout mq="lg">
            <Titles />
            <b-container fluid class="app_page">
                <b-row>
                    <b-col cols="6" class="" id="left">
                      <b-row>
                        <ProductCard 
                            v-for="item in lookbook.fields.presentationPictures"
                            :thumbnail="item.fields.file.url"
                            :key="item"
                        />
                      </b-row>
                    </b-col>
                    <b-col cols="3" class="border-left border-right pt-3 pb-4 padding-left" id="middle">
                        <div>
                            <p class="mb-0 pb-0 text-uppercase">{{ lookbook.fields.item}}</p>
                            <p class="pt-0 mt-0 text-uppercase">{{ lookbook.fields.price}}</p>
                        </div>
                        <div class="pt-1 mr-4">
                            <p class="mb-0 pb-0 uppercase">
                              <vue-markdown>{{ lookbook.fields.description }}</vue-markdown>
                            </p>
                        </div>
                    </b-col>
                    <b-col cols="3" class="pt-3 pb-4 padding-left" id="right">
                        <router-link to="/home">
                                  <p class="">BACK</p>
                        </router-link>
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
  import Footer from '@/components/Footer'
  import ProductCard from '@/components/ProductCard'
  import TitleMobile from '@/components/mobile/TitleMobile'
  import DetailsMobile from '@/components/mobile/DetailsMobile'
  import PictureCard from '@/components/mobile/PictureCard'
  import CampaignsMobile from '@/components/mobile/CampaignsMobile'
  import StoriesMobile from '@/components/mobile/StoriesMobile'
  import InstagramMobile from '@/components/mobile/InstagramMobile'
  import { createClient } from '@/plugins/contentful'
  import VueMarkdown from 'vue-markdown'
  const contentfulClient = createClient()

  export default {
      components: {
        Header,
        Titles,
        Footer,
        ProductCard,
        TitleMobile,
        DetailsMobile,
        PictureCard,
        CampaignsMobile,
        StoriesMobile,
        InstagramMobile,
        VueMarkdown
    },
    name: 'index',
    asyncData ({ env, params }) {
      return contentfulClient.getEntries({
        'content_type': 'lookbook',
        'fields.slug': params.slug
      }).then(entries => {
        return {
          lookbook: entries.items[0],
        }
      }).catch(console.error)
    }
  }

  // const contentful = require('contentful')

  // const client = contentful.createClient({
  //   space: '6580dm5jk20d',
  //   environment: 'master', // defaults to 'master' if not set
  //   accessToken: '4FsCxM63XHlG6O-h5dvdpzVz25j5u8IadghfkuQOcz0'
  // })

  // client.getEntries()
  // .then((response) => console.log(response.items))
  // .catch(console.error)

</script>

