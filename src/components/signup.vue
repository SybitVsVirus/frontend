<template>
    <v-container fluid class="pa-0 ma-0 signupcontainer">
        <v-container>
            <v-row class="signupcontainer--box" no-gutters>
                <v-col cols="6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p></v-col>
                <v-col cols="3" class="text-center"><v-btn color="primary">Join today</v-btn></v-col>
                <v-col cols="3" class="text-center"><v-btn>Contact us</v-btn></v-col>
            </v-row>
        </v-container>
      </v-container>
</template>

<script>
    export default {
        name: 'signup',
        props: {},
        data: () => ({})
    }
</script>

<style scoped>
    .signupcontainer {
        background: #EEEFF1;
       
    }
    .signupcontainer--box {
         height: 140px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>


