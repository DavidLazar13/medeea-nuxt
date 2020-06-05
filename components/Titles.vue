<template>
    <b-container fluid >
            <b-row class="fixed-titles">
                <b-col cols="6" class="border-bottom border-top border-right pt-3 pb-4">
                    <p class="padding-left-titles p-titles">LOOKBOOK</p>
                </b-col>
                <b-col cols="3" class="border-bottom border-top border-right  pt-3 pb-4">
                    <p class="padding-left-titles p-titles">CAMPAIGNS</p>
                </b-col>
                <b-col cols="3" class="border-bottom border-top pt-3 pb-4">
                    <p class="padding-left-titles p-titles">STORIES</p>
                </b-col>
            </b-row>
    </b-container>
</template>

<style>
 .fixed-titles{
    overflow: hidden;
    background-color: white;
    position: fixed; /* Set the navbar to fixed position */
    top: 54px; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 100;
 }
 .padding-left-titles{
    padding-left: 12px;
 }
 .p-titles{
     font-size:12px;
     font-weight: bold;
     line-height: normal;
 }
 .title-container-h{
     height: 85px;
 }
</style>
