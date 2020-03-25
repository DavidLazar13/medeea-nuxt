<template>
  <section>
        <div class="page-wrap">
          <Header />
          <mq-layout mq="sm">
            <TitleMobile title="CAMPAIGN"/>
            <DetailsMobile/>
            <PictureCard />
            <PictureCard />
            <PictureCard />
            <PictureCard />
            <PictureCard />
            <LookbookMobile />
            <StoriesMobile />
            <InstagramMobile />
          </mq-layout>

          <mq-layout mq="lg">
            <Titles />
            <b-container fluid class="app_page">
              <b-row>
                <div id="scroll-area">
                  <b-row>
                      <b-col cols="6" class="border" >
                        <b-row>
                          <ProductCard />
                        </b-row>
                      </b-col>
                      <b-col cols="3" class="border sticky pt-3 pb-4">
                          <div>
                              <p class="mb-0 pb-0">FW19/20 BLAZER</p>
                              <p class="pt-0 mt-0">2.300 RON</p>
                          </div>
                          <div class="pt-1">
                              <p class="mb-0 pb-0 uppercase">Suit pant in refined wool WITH custom 
                                pinstripe fabric, selvage curved seam. </p>
                          </div>
                      </b-col>
                      <b-col cols="3" class="border sticky pt-3 pb-4">
                          <router-link to="/">
                                    <p>BACK</p>
                          </router-link>
                      </b-col>  
                  </b-row> 
                  <b-row>
                      <b-col cols="12" class="border" >
                        <b-row>
                          <CampaignCard />
                          <CampaignCard />
                          <CampaignCard />
                          <CampaignCard />
                          <CampaignCard />
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
        InstagramMobile
    }
  }

  // const contentful = require('contentful')

  // const client = contentful.createClient({
  //   space: '6580dm5jk20d',
  //   environment: 'master', // defaults to 'master' if not set
  //   accessToken: '4FsCxM63XHlG6O-h5dvdpzVz25j5u8fIadghfkuQOcz0'
  // })

  // client.getEntries()
  // .then((response) => console.log(response.items))
  // .catch(console.error)

</script>


<style>
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
