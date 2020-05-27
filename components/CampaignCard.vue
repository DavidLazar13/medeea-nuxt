<template>
 
        <b-col cols="6" class="pic-card border-top">
            
            <img class="image" :src="picture"/>

        </b-col>
    

</template>

<script>
    export default {
        props: ['picture']
    }
</script>

<style>
    
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