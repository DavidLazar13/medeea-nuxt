<template>
    <b-container fluid>
            <b-row @click="attachDisplay = !attachDisplay">
                <b-col cols="12" class="pt-3 pb-4">
                    <p class="font-size-32 pb-3">LOOKBOOK</p>
                </b-col>
            </b-row>
            <b-row :class="{display: attachDisplay}" class="border-top">
                <slot></slot>
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
                attachDisplay: false
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
