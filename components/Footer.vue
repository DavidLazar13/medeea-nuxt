<template>
    <footer fluid class="footer container-fluid">
            <b-row class="footer-row">
                <b-col cols="12" md="6" col- class="border-top border-right pt-3">
                    <div class="py-1 px-0 px-md-3">
                        <div>
                            <p class="mb-0 pb-0">BUCHAREST, LONDRA 28</p>
                            <p class="mb-0 pb-0">MONDAY TO FRIDAY</p>
                            <p class="mb-0 pb-0">12:00–19:00</p>
                            <p class="pt-0 mt-0">SATURDAY BY APPOINTMENT</p>
                        </div>
                        <div class="pt-1 uppercase">
                            <p class="mb-0 pb-0"><a v-bind:href="'mailto:contact@medeeaene.com'">contact@medeeaene.com</a></p>
                            <p class="pt-0 mt-0"><a v-bind:href="'tel:+40 754 633 332'">+40 754 633 332</a></p>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" md="6" class="border-top pt-3 d-flex">
                    <div class="py-1 px-0 px-md-3 details-width">
                        <div>
                            <p>ALL CONTENTS OF THIS WEBSITE ARE THE PROPERTY OF MEDEEA. NO PART OF THIS SITE, INCLUDING ALL TEXT 
                                AND IMAGES, MAY BE REPRODUCED IN ANY FORM WITHOUT THE PRIOR WRITTEN CONSENT OF MEDEEA.</p>
                        </div>
                        <div class="mt-5 mt-md-0">
                            <p class="mb-0 pb-0">COPYRIGHT © 2020 MEDEEA.</p>
                            <p class="pt-0 mt-0">ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
    </footer>
</template>



<style>

    .details-width{
        max-width: 500px;
    }
    .padding-left{
        padding-left: 27px;
    }   

    p{
        font-size: 10px;
        font-weight: bold;
        line-height: normal;
    }

    .footer-row {
        height: 130px;
    }

    @media only screen and (max-width: 600px) {
        .footer {
        bottom: 0;
        }
        .footer-row {
        height: inherit;
        }
        .border-left{
            border-left: none !important;
        }
    } 
    
</style>
