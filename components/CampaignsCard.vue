<template>
    <b-col cols="12" class="pic-card">
        <nuxt-link :to="'/campaign/' + slug">
            <img class="image" :src="thumbnail"/>
        </nuxt-link>
        <div class="card-body ">
            <p class="mb-0 pb-3 pl-0 pl-md-3 text-uppercase">{{title}}</p>
        </div>
    </b-col>
</template>

<script>
    export default {
        props: ['thumbnail', 'title', 'slug']
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