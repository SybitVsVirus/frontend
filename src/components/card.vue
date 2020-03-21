<template>
    <v-container>
        <v-card class="mx-auto" max-width="344" outlined>
            <v-img :src="image" height="200px"></v-img>
            <v-card-title>
                {{ title }}
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
    }
</script>
