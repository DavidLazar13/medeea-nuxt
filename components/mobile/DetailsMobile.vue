<template>
    <b-container fluid >
            <b-row class="">
                <b-col cols="12" class="border-bottom mt-1 border-top pt-3 pb-1">
                    <div>
                        <p class="mb-0 pb-0 uppercase"><vue-markdown>{{ title }}</vue-markdown></p>
                        <p class="mb-0 pb-0 uppercase">{{ price }}</p>
                    </div>
                    <div>
                        <p class="mb-0 pb-0 uppercase">
                           <vue-markdown> {{ description }} </vue-markdown>
                         </p>
                    </div>
                    
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'

    export default {
        components:{
            VueMarkdown
        },
        props: ['title', 'price', 'description']
    }
</script>

<style scoped>
 .font-size-32{
        font-size: 18px;
    }
 
 .markdown-p p{
     margin-bottom: 0px
 }

</style>
