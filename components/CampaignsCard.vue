<template>
    <b-col cols="12" class="pic-card">
        <nuxt-link to="/campaign">
            <img class="image" src="/lookbook/11_92A6856.jpg"/>
        </nuxt-link>
        <div class="card-body">
            <p class="mb-0 pb-0">{{title}}</p>
        </div>
    </b-col>
</template>

<script>
    export default {
        props: ['thumbnail', 'title']
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