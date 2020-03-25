<template>
    <b-container fluid>
            <b-row @click="attachDisplay = !attachDisplay">
                <b-col cols="12" class="border pt-3 pb-4">
                    <p class="font-size-32">CAMPAIGNS</p>
                </b-col>
            </b-row>
            <b-row :class="{display: attachDisplay}">
                <CampaignsCard 
                              thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              title="SPRING/SUMMER 2020"
                            />
                <CampaignsCard 
                              thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              title="SPRING/SUMMER 2020"
                            />
                <CampaignsCard 
                              thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              title="SPRING/SUMMER 2020"
                            />
                <CampaignsCard 
                              thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              title="SPRING/SUMMER 2020"
                            />
                <CampaignsCard 
                              thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              title="SPRING/SUMMER 2020"
                            />
                <CampaignsCard 
                              thumbnail="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              title="SPRING/SUMMER 2020"
                            />
            </b-row>
    </b-container>
</template>

<script>
    import CampaignsCard from '@/components/CampaignsCard'

    export default {
        components:{
            CampaignsCard
        },
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
