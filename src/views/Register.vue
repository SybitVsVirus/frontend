<template>
  <div class="register">
      <v-container>
        <v-row>
            <v-col cols="12"><h1>Komm in unser Team</h1></v-col>
        </v-row>
        <v-row>
            <v-col cols="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <card 
              image="med_einrichtung.png" 
              title="Medizinische Einrichtung"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              />
            </v-col>
            <v-col cols="4">
              <card 
              image="freiwillige_helfer.png" 
              title="Freiwillige Helfer"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              />
            </v-col>
            <v-col cols="4">
              <card 
              image="patienten.png" 
              title="Patienten"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
              />
            </v-col>
        </v-row>
      </v-container>
      <signup />
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card.vue'
import signup from '@/components/signup.vue'

export default {
  name: 'Register',
  components: {
    card,
    signup
  }
}
</script>
