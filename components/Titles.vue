<template>
    <b-container fluid >
            <b-row class="fixed-titles">
                <b-col cols="6" class="border-bottom  pt-3 pb-4">
                    <p class="padding-left">LOOKBOOK</p>
                </b-col>
                <b-col cols="3" class="border-bottom border-left border-right  pt-3 pb-4">
                    <p class="padding-left">CAMPAIGNS</p>
                </b-col>
                <b-col cols="3" class="border-bottom  pt-3 pb-4">
                    <p class="padding-left">STORIES</p>
                </b-col>
            </b-row>
    </b-container>
</template>

<style scoped>
.fixed-titles{
    overflow: hidden;
    background-color: white;
    position: fixed; /* Set the navbar to fixed position */
    top: 55px; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 100;
}
.padding-left{
    padding-left: 12px;
}
 p{
     font-size:12px;
     font-weight: bold;
     line-height: normal;
 }
 .title-container-h{
     height: 85px;
 }
</style>
