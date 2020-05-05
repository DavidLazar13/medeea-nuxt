<template>
 
        <b-col cols="12" class="pic-card">
            
            <img class="image" :src="picture"/>

        </b-col>
    

</template>

<script>
     export default {
        props: ['picture']
    }
</script>

<style scoped>
    
    .pic-card{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .image{
         width: 100%;
        height: auto;
    }
    p{
        font-size: 10px;
        font-weight: bold;
    }
 
</style>