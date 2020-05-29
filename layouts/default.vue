<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}



html, body {
  height: 100%;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.border {
  border: 1px solid black!important;
}

.border-top-bottom{
  border-top: 1px solid black!important;
  border-bottom: 1px solid black!important;
}

.border-top{
  border-top: 1px solid black!important;
}

.border-bottom{
  border-bottom: 1px solid black!important;
}

.border-left{
  border-left: 1px solid black!important;
}

.border-right{
  border-right: 1px solid black!important;
}

.border-bottom-x2{
  border-bottom: 2px solid black!important;
}

.border-top-x2{
  border-top: 2px solid black!important;
}

 .uppercase {
   text-transform: uppercase;
 }

  .fixed-navbar {
    overflow: hidden;
    background-color: white;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 100;
    }
  
  .app_page {
    margin: 0%;
    overflow: hidden;
    min-height: calc(100vh - 141px);
    margin-top: 112px;
    
}
    
@media only screen and (max-width: 600px) {
  .border-right{
    border-right: none!important;
  }
}

.load-more-btn{
  width: 100%;
  border-top: black solid 1px;
  height: 55px;
  font-size: 10px;
  font-weight: bold;
}

.pointer{
  cursor:pointer;
}

 /* .first .lookbook-card:nth-child(2n+1){
   border-right: 1px solid black;
 } */


.margin-top-header{
  margin-top: 83px;
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

.font-size-32{
    font-size: 18px;
}

::-webkit-scrollbar {
    display: none;
}

@media (min-width: 768px) {
    #left {
        max-height:87vh;
        bottom: 0;
        
       
        overflow-y: scroll;
    }

    #middle {
        max-height:87vh;
        bottom: 0;
    
       
        overflow-y: scroll;
    }

    #right {
        max-height:87vh;
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
      color:black !important;
    }

    a:visited {
      text-decoration: none;
      color:black !important;
    }

    a:hover {
      text-decoration: none;
      color:black !important;
    }

    a:active {
      text-decoration: none;
      color:black !important;
    }

 
</style>
