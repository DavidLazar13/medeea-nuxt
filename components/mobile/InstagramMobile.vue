<template>
    <b-container fluid>
            <a v-bind:href="link">
                <b-row>
                    <b-col cols="12" class="border-top border-bottom pt-3 pb-4">
                        <p class="font-size-32 pb-3">INSTAGRAM</p>
                    </b-col>
                </b-row>
            </a>
    </b-container>
</template>

<script>
     export default {
        data: function(){
            return {
                link: 'https://www.instagram.com/medeeae/'
            }
        }
    }
</script>


<style scoped>



    p{
        font-weight: medium;
        line-height: normal;
    }

    .font-size-32{
        font-size: 18px;
    }

</style>
