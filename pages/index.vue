<template>
  <section>
        <Header />
        <Titles />
        <b-container fluid class="app_page">
            <b-row>
                <b-col cols="12" md="6" class="" id="left">
                  <b-row>
                    <LookbookCard 
                      thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                    <LookbookCard 
                      thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      title="FW19/20 BLAZER"
                      price="2.300 RON"
                    />
                  </b-row>
                </b-col>
                <b-col cols="12" md="3" class="border" id="middle">
                  <b-row>
                    <CampaignsCard 
                        thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        title="SPRING/SUMMER 2020"
                      />
                      <CampaignsCard 
                        thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        title="SPRING/SUMMER 2020"
                      />
                      <CampaignsCard 
                        thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        title="SPRING/SUMMER 2020"
                      />
                      <CampaignsCard 
                        thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        title="SPRING/SUMMER 2020"
                      />
                      <CampaignsCard 
                        thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                        title="SPRING/SUMMER 2020"
                      />   
                  </b-row>
                </b-col>
                <b-col cols="12" md="3" class="border" id="right">
                    <b-row>
                      <Stories
                        title="SPRING/SUMMER 2020"
                       />
                    </b-row>
                </b-col> 
            </b-row> 
        </b-container>

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

  export default {
    components: {
      Header,
      Titles,
      LookbookCard,
      CampaignsCard,
      Stories,
      Footer
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
    min-height: calc(100vh - 141px);
    
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
  color:black;
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
