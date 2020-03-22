<template>
  <v-app>
    <v-navigation-drawer
      class="hidden-lg-and-up"
      v-model="drawer"
      app
      right
      temporary
    >
      <v-list dense>
        <v-btn :to="item.path"
          class="text-transform-none"
          v-for="item in menuItems"
          :key="item.title"
          block
          text>
          {{ item.title }}
        </v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app height="130" color="white">
      <v-toolbar-title
        class="ml-0 pl-4">
          <router-link to="/"><v-img src="@/assets/logo.svg" aspect-ratio="2" height="110" min-width="220"></v-img></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn :to="item.path"
          class="text-transform-none"
          v-for="item in menuItems"
          :key="item.title"
          text>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up" />
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import 'typeface-montserrat';

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menuItems: [
      {title: 'Vision', path: '/vision'},
      {title: 'Weiterleitung einrichten', path: '/hotline'},
      {title: 'Registrieren', path: '/register'},
      {title: 'Anmelden', path: '/login'},
    ]
  }),
};
</script>
<style>
  * {font-family: 'Montserrat', sans-serif !important;}
</style>
<style scoped>
  .text-transform-none { text-transform: none !important; }
</style>
