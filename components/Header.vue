<template>
    <b-container fluid>
            <mq-layout mq="sm">
                <b-row class="fixed-navbar">
                    <b-col cols="12" md="6" class="pt-3 border-bottom">
                        <div class="pb-5 padding-left pt-1">
                            <router-link to="/home">
                                <img class="logo pb-3" src="~/assets/medeea_medeea_black.png">
                            </router-link>   
                        </div>
                    </b-col>
                </b-row>
            </mq-layout>
            <mq-layout mq="lg">
                <b-row>
                    <b-col cols="12" md="6" class=" border-bottom  pt-3">
                        <div class="padding-left pt-1">
                            <router-link to="/home">
                                <img class="logo" src="~/~/assets/medeea_medeea_black.png">
                            </router-link>
                        </div>
                    </b-col>
                    <b-col cols="12" md="3" class="border-bottom border-left border-right pt-3">
                        <p class="padding-left mb-0 pb-0">+40 723 983 828</p>
                        <p class="padding-left" >INQUIRIES(AT)MEDEEAENE.COM</p>
                    </b-col>
                    <b-col cols="12" md="3" class="border-bottom pt-3">
                        <a v-bind:href="link">
                            <p class="padding-left">INSTAGRAM</p>
                        </a>
                    </b-col>
                </b-row>
            </mq-layout> 
    </b-container>
</template>

<script>
     export default {
        data: function(){
            return {
                link: 'https://www.instagram.com/medeeae/'
            }
        }
    }
</script>

<style scoped>
    .fixed-navbar {
    overflow: hidden;
    background-color: white;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 100;
    }

    .padding-left{
        padding-left: 12px;
    }

    .logo { 
        max-width: 120px;
    }

    p{
        font-size: 12px;
        font-weight: bold;
        line-height: normal; 
    }

</style>
