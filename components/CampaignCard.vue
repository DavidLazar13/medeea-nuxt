<template>
 
        <b-col cols="6" class="pic-card border-sides">
            
            <img class="image" src="/lookbook/11_92A6807.jpg"/>

        </b-col>
    

</template>

<script>
    export default {
        props: ['thumbnail', 'title', 'price']
    }
</script>

<style scoped>
    .border-sides {
        border-left: 1px solid;
        border-right: 1px solid;
    }
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