<template>
    <v-container>
        <v-card class="mx-auto" max-width="350" outlined tile=true>
            <v-img :src=imageSrc height="200px"></v-img>
            <v-card-title>
                <b>{{ title }}</b>
            </v-card-title>
            <v-card-text class="text--primary">
                {{ text }}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'card',
        props: {
            image: String,
            title: String,
            text: String
        },
        data: () => ({}),
        computed: {
            imageSrc: function () {
                return require( '@/assets/' + this.image)
            }
        }
    }
</script>
