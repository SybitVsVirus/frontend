<template>
  <div class="hotline">
      <v-container>
        <v-row class="text-left">
            <v-col cols="12">
              <h1>Weiterleitung einrichten</h1>
              <p>Hier folgt dann später noch eine Einführung, wie ärztliche Einrichtungen und Praxen einfach auf den digitalen medizinischen Assistenten umstellen können.</p>
              <p>Für alle interessierten ist der digitale medizinische Assistent bereits unter nachfolgender Nummer erreichbar</p>.
              <div class="align-center d-flex body-1">
                <span class="mdi mdi-phone-outline mdi-2 pr-2 mb-n3 display-2	"></span>
                <span class="headline">+49 69 50985984</span>
              </div>
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
  name: 'Register',
  components: {
    pageFooter,
  }
}
</script>