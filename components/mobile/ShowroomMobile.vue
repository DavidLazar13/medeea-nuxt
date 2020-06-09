<template>
    <b-container fluid>
            <b-row @click="attachDisplay = !attachDisplay">
                <b-col cols="12" class="border-top pt-3 pb-4">
                    <p class="font-size-32 pb-3">SHOWROOM</p>
                </b-col>
            </b-row>
            <b-row :class="{display: attachDisplay}">
                <b-col cols="12" class=" border-top pt-3 pb-1">
                    <div>
                        <p class="uppercase">
                           BUCHAREST, LONDRA 28<br>
                           Monday to Friday<br>
                           12:00–19:00<br>
                           SATURDAY BY APPOINTMENT
                         </p>
                         <p class="uppercase">
                          <a v-bind:href="'mailto:contact@medeeaene.com'">contact@medeeaene.com</a><br>
                          <a v-bind:href="'tel:+40 754 633 332'">+40 754 633 332</a>
                         </p>
                    </div>
                    
                </b-col>
                <b-col cols="12" class="pic-card border-top">
            
                            <img class="image" src="~/~/assets/medeea_showroom_1.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_2.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_3.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_4.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_5.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_6.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_7.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_8.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_9.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_10.jpg"/>

                </b-col>
                <b-col cols="12" class="pic-card">
            
                            <img class="image" src="~/~/assets/medeea_showroom_11.jpg"/>

                </b-col>
            </b-row>
    </b-container>
</template>

<script>

    export default {
        data: function(){
            return {
                attachDisplay: true
            }
        }
    }
</script>


<style scoped>
    
    .display {
        display: none;
    }

    .logo { 
        max-width: 150px;
    }

    p{
        font-weight: medium;
        line-height: normal;
    }

    .font-size-32{
        font-size: 18px;
    }

</style>
