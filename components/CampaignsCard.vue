<template>
    <b-col cols="12" class="pic-card">
        <nuxt-link :to="'/campaign/' + slug">
            <img class="image" :src="thumbnail"/>
        </nuxt-link>
        <div class="card-body ">
            <p class="mb-0 pl-0 pl-md-3 text-uppercase"><vue-markdown>{{title}}</vue-markdown></p>
        </div>
    </b-col>
</template>

<script>
import VueMarkdown from 'vue-markdown'

    export default {
        props: ['thumbnail', 'title', 'slug'],
        components: {
            VueMarkdown
        }
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