<template>
 
        <b-col cols="12" md="6" class="pic-card">
            <nuxt-link :to="'/product/'+ slug">
                <img class="image" :src="thumbnail"/>
            </nuxt-link>
            <div class="card-body">
                <p class="mb-0 pb-0 pl-0 pl-md-3 text-uppercase"><vue-markdown>{{title}}</vue-markdown></p>
            </div>
        </b-col>
    

</template>

<script>
import VueMarkdown from 'vue-markdown'

    export default {
        props: ['thumbnail', 'title', 'price' ,'slug'],
        components: {
            VueMarkdown
        }
    }
</script>

<style >
    .card-body{
        padding-bottom: 4px;
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

    .border-sides{
        border-right: 1px solid black!important;
        border-left: 1px solid black!important;
    }
  
</style>