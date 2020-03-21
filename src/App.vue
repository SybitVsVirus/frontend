<template>
  <v-app>
    <v-app-bar app height="130" color="white">
      <v-toolbar-title>
          <router-link to="/"><v-img src="@/assets/logo.svg" aspect-ratio="2" height="110" min-width="220"></v-img></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn :to="item.path"
          v-for="item in menuItems"
          :key="item.title"
          :text="item.type === 'text'"
          :outlined="item.type === 'outlined'">
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
      {title: 'Über uns', path: '/about', type: 'text'},
      {title: 'Hilfe', path: '/help', type: 'text'},
      {title: 'Hotline freischalten', path: '/hotline', type: 'text'},
      {title: 'Anmelden', path: '/aa', type: 'outlined'},
      {title: 'Registrieren', path: '/bb', type: 'outlined'},
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