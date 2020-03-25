<template>
    <b-container fluid >
            <b-row class="title-container-h">
                <b-col cols="12" class="border pt-3 pb-4">
                    <p class="font-size-32">{{ title }}</p>
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
