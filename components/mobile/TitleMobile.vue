<template>
    <b-container fluid >
            <b-row class="">
                <b-col cols="12" class="pt-3 pb-4">
                    <p class="font-size-32 padding-bottom">{{ title }}</p>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>
 .font-size-32{
        font-size: 18px;
    }

.padding-bottom{
    padding-bottom: 9px;
    }
 
</style>
