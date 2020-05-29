<template>
    <b-container fluid>
            <mq-layout mq="sm">
                <b-row class="fixed-navbar">
                    <b-col cols="12" md="6" class="pt-3 border-bottom">
                        <div class="pb-5 pt-1">
                            <router-link to="/home">
                                <img class="logo pb-3" src="~/assets/medeea-logo.png">
                            </router-link>   
                        </div>
                    </b-col>
                </b-row>
            </mq-layout>
            <mq-layout mq="lg">
                <b-row class="fixed-navbar">
                    <b-col cols="12" md="6" class=" border-bottom border-right  pt-3">
                        <div class="padding-left-titles pt-1">
                            <router-link to="/home">
                                <img class="logo" src="~/~/assets/medeea_medeea_black.png">
                            </router-link>
                        </div>
                    </b-col>
                    <b-col cols="12" md="3" class="border-bottom border-right pt-3">
                        <p class="padding-left-titles mb-0 pb-0 p-titles">+40 723 983 828</p>
                        <p class="padding-left-titles p-titles" >INQUIRIES(AT)MEDEEAENE.COM</p>
                    </b-col>
                    <b-col cols="12" md="3" class="border-bottom pt-3">
                        <a v-bind:href="link">
                            <p class="padding-left-titles p-titles">INSTAGRAM</p>
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

<style>
    
    .logo { 
        max-width: 120px;
    }

</style>
