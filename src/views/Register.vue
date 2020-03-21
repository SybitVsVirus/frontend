<template>
  <div class="register">
      <v-container>
        <v-row>
            <v-col cols="12"><h1>Komm in unser Team</h1></v-col>
        </v-row>
        <v-row>
            <v-col cols="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <card 
              image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" 
              title="Medizinische Einrichtung"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </v-col>
            <v-col cols="4">
              <card 
              image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" 
              title="Freiwillige Helfer"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </v-col>
            <v-col cols="4">
              <card 
              image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" 
              title="Patienten"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card.vue'

export default {
  name: 'Register',
  components: {
    card
  }
}
</script>
