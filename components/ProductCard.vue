<template>
 
        <b-col cols="12" class="pic-card">
            
            <img class="image" src="/lookbook/11_92A6807.jpg"/>

        </b-col>
    

</template>

<script>
    export default {
        props: ['thumbnail', 'title', 'price']
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