<template>
<router-link to="/home">
    <div class="bg" :class="selectedBackground">
        <img class="logo-landing" src="~/~/assets/Medeea_Stripe_Black.png">
    </div>
</router-link>
</template>

<script>
    export default {
        data: function() {
             return {
                backgrounds: [
                'bg-1',
                'bg-2',
                'bg-3',
                'bg-4',
                ],
                selectedBackground: 'bg-1'
            };
	    },
        methods: {
            randomBackground() {
            this.selectedBackground = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
            }
        },
        mounted(){
		    this.randomBackground()
	    },
    }
</script>


<style>
.logo-landing{
    margin: 15px 0 0 27px;
    width: 120px;
}
.bg {
  /* The image used */
  

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-1{
    background-image: url('/landing-page.png');
}

.bg-2{
    background-image: url('/landing_2.png');
}

.bg-3{
    background-image: url('/landing_3.png');
}

.bg-4{
    background-image: url('/landing_4.png');
}

</style>