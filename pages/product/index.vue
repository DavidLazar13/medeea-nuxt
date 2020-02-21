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

  const contentful = require('contentful')

  const client = contentful.createClient({
    space: '6580dm5jk20d',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '4FsCxM63XHlG6O-h5dvdpzVz25j5u8IadghfkuQOcz0'
  })

  client.getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error)

</script>


<style>
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
    min-height: calc(100vh - 115px);
    
}

::-webkit-scrollbar {
    display: none;
}

@media (min-width: 768px) {
    #left {
        position: absolute;
        top: 115px;
        bottom: 0;
        left: 0;
        width: 50%;
        overflow-y: scroll;
    }

    #middle {
        position: absolute;
        top: 115px;
        bottom: 0;
        left: 50%;
        width: 25%;
        overflow-y: scroll;
    }

    #right {
        position: absolute;
        top: 115px;
        bottom: 0;
        right: 0;
        overflow-y: scroll;
        width: 25%;
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


</style>
