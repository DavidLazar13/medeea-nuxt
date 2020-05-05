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

@media only screen and (max-width: 600px) {
  .border-right{
    border-right: none!important;
  }
}
 
</style>
