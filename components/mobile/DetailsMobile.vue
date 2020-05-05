<template>
    <b-container fluid >
            <b-row class="title-container-h">
                <b-col cols="12" class="border-bottom mt-1 border-top pt-3 pb-4 padding-left">
                    <div>
                        <p class="mb-0 pb-0 uppercase">{{ title }}</p>
                        <p class="mb-0 pb-0 uppercase">{{ price }}</p>
                    </div>
                    <div class="pt-1">
                        <p class="mb-0 pb-0 uppercase">
                            {{ description }}
                         </p>
                    </div>
                    </div>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
    export default {
        props: ['title', 'price', 'description']
    }
</script>

<style scoped>
 .font-size-32{
        font-size: 18px;
    }
</style>
