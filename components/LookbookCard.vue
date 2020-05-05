<template>
 
        <b-col cols="12" md="6" class="pic-card border-right">
            <nuxt-link :to="'/product/'+ slug">
                <img class="image" :src="thumbnail"/>
            </nuxt-link>
            <div class="card-body padding-left">
                <p class="mb-0 pb-0 text-uppercase">{{title}}</p>
                <p class="pt-0 mt-0 mb-0 text-uppercase">{{price}}</p>
            </div>
        </b-col>
    

</template>

<script>
    export default {
        props: ['thumbnail', 'title', 'price' ,'slug']
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

    .border-sides{
        border-right: 1px solid black!important;
        border-left: 1px solid black!important;
    }
  
</style>