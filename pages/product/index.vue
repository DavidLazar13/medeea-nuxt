<template>
  <section>
        <Header />
        <Titles />
        <b-container fluid class="app_page">
            <b-row>
                <b-col cols="6" class="border" id="left">
                  <b-row>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </b-row>
                </b-col>
                <b-col cols="3" class="border pt-3 pb-4" id="middle">
                    <div>
                        <p class="mb-0 pb-0">FW19/20 BLAZER</p>
                        <p class="pt-0 mt-0">2.300 RON</p>
                    </div>
                    <div class="pt-1 mr-4">
                        <p class="mb-0 pb-0 uppercase">Suit pant in refined wool WITH custom 
                          pinstripe fabric, selvage curved seam. </p>
                    </div>
                </b-col>
                <b-col cols="3" class="border pt-3 pb-4" id="right">
                    <router-link to="/">
                              <p>BACK</p>
                    </router-link>
                </b-col> 
            </b-row> 
        </b-container>

        <Footer />   
  </section>
</template>

<script>
  import Header from '@/components/Header'
  import Titles from '@/components/Titles'
  import Footer from '@/components/Footer'
  import ProductCard from '@/components/ProductCard'

  export default {
      components: {
        Header,
        Titles,
        Footer,
        ProductCard
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

