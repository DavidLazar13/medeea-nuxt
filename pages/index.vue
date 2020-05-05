<template>
<router-link to="/home">
    <div class="bg">
        <img class="logo-landing" src="~/~/assets/Medeea_Stripe_Black.png">
    </div>
</router-link>
</template>


<style scoped>
.logo-landing{
    margin: 15px 0 0 27px;
    width: 120px;
}
.bg {
  /* The image used */
  background-image: url('/landing-page.png');

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>