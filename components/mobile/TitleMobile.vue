<template>
    <b-container fluid >
            <b-row class="">
                <b-col cols="12" class="border-top mt-1 pt-3 pb-4 padding-left">
                    <p class="font-size-32 pb-3">{{ title }}</p>
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

 .title-container-h{
     height: 85px;
 }
</style>
