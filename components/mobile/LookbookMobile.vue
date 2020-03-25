<template>
    <b-container fluid>
            <b-row @click="attachDisplay = !attachDisplay">
                <b-col cols="12" class="border pt-3 pb-4">
                    <p class="font-size-32">LOOKBOOK</p>
                </b-col>
            </b-row>
            <b-row :class="{display: attachDisplay}">
                <LookbookCard 
                            thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                            title="FW19/20 BLAZER"
                            price="2.300 RON"
                          />
                <LookbookCard 
                            thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                            title="FW19/20 BLAZER"
                            price="2.300 RON"
                          />
                <LookbookCard 
                            thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                            title="FW19/20 BLAZER"
                            price="2.300 RON"
                          />
                <LookbookCard 
                            thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                            title="FW19/20 BLAZER"
                            price="2.300 RON"
                          />
                <LookbookCard 
                            thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                            title="FW19/20 BLAZER"
                            price="2.300 RON"
                          />
                <LookbookCard 
                            thumbnail="https://static.dezeen.com/uploads/2019/09/parsons-fashion-show-2019-new-york-city-usa-dezeen-2364-meg-calloway2-852x1278.jpg"
                            title="FW19/20 BLAZER"
                            price="2.300 RON"
                          />
            </b-row>
    </b-container>
</template>

<script>
    import LookbookCard from '@/components/LookbookCard'

    export default {
        components:{
            LookbookCard
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
