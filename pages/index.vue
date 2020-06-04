<template>
<router-link to="/home">
    <!-- <div class="bg" :class="selectedBackground">
        <img class="logo-landing" src="~/~/assets/Medeea-stripe.png">
    </div> --> 
    <div class="fullscreen-bg">
        <img class="logo-landing" src="~/~/assets/Medeea-stripe.png">
        <video playsinline loop muted autoplay preload class="fullscreen-bg__video" src="video-medeea.mp4">
            
        </video>
    </div>
</router-link>
</template>

<script>
    // export default {
    //     data: function() {
    //          return {
    //             backgrounds: [
    //             'bg-1',
    //             'bg-2',
    //             'bg-3',
    //             'bg-4',
    //             ],
    //             selectedBackground: 'bg-1'
    //         };
	//     },
    //     methods: {
    //         randomBackground() {
    //         this.selectedBackground = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
    //         }
    //     },
    //     mounted(){
	// 	    this.randomBackground()
	//     },
    // }
</script>


<style>
.logo-landing{
    position: fixed;
    top: 15px;
    left: 27px;
    width: 120px;
    z-index: 100;
}

.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 390%;
    left: -144%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
      
    height: 300%;
    top: -100%;
  
  }

}


/*
.bg {
 
  height: 100vh;

 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-1{
    background-image: url('/landing-page-min.png');
}

.bg-2{
    background-image: url('/landing_2-min.png');
}

.bg-3{
    background-image: url('/landing_3-min.png');
}

.bg-4{
    background-image: url('/landing_4-min.png');
}

*/
</style>