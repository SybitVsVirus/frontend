<template>
  <div class="hotline">
      <v-container>
        <v-row class="text-left">
            <v-col cols="12">
              <h1>Impressum</h1>
              <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

            </v-col>
        </v-row>
      </v-container>
      <pageFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import pageFooter from '@/components/pageFooter.vue'

export default {
  name: 'Privacy',
  components: {
    pageFooter,
  }
}
</script>