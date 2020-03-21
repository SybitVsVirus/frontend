<template>
  <v-app>
    <v-app-bar app height="130" color="white">
      <v-toolbar-title>
          <router-link to="/"><v-img src="@/assets/logo.svg" aspect-ratio="2" height="110" min-width="220"></v-img></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn :to="item.path"
          class="text-transform-none"
          v-for="item in menuItems"
          :key="item.title"
          text>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  calculated: {
  },

  data: () => ({
    menuItems: [
      {title: 'Vision', path: '/vision'},
      {title: 'Weiterleitung einrichten', path: '/hotline'},
      {title: 'Registrieren', path: '/register'},
      {title: 'Anmelden', path: '/login'},
    ]
  }),
  methods: {
    typeOfButton: function (item) {
      console.log(item)
      return (item.type === 'text')
    }

  }
};
</script>
<style scoped>
  .text-transform-none { text-transform: none !important; }
</style>