<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      light
    >
      <div class="d-flex align-center">
        MCC - Medical Competence Center
      </div>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
