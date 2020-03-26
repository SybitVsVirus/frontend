<template>
  <div class="register">
      <v-container>
        <v-row>
            <v-col cols="12"><h1>Komm in unser Netzwerk</h1></v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="10">Gegenseitige Hilfe ist in der jetzigen Situation sehr wichtig. Gemeinsames Engagement sorgt zum einen zur wichtigen Entlastung medizinischer Kräfte wie aber auch zur besseren Versorgung von besorgten Bürgern und Patienten. </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="4">
              <card 
              image="med_einrichtung.png" 
              title="Medizinische Einrichtung"
              text="Registrieren Sie ihre medizinische Einrichtung in das MED Netzwerk, um sofort und zukünftig von dem aktuellen Netzwerk zu profitieren. Wichtig hierbei sind zentrale Kontaktdaten sowie ihr medizinisches Angebot und dessen Abgrenzung."
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <card 
              image="freiwillige_helfer.png" 
              title="Freiwillige Helfer"
              text="Du hast eine medizinische Ausbildung und möchtest das Netzwerk unterstützen. Registriere dich und Teile uns die Art deiner Ausbildung mit. Gerne setzen wir dich zur persönlichen Beratung ein, um mögliche Warteschleifen kurz zu halten."
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <card 
              image="patienten.png" 
              title="Patienten"
              text="Registrieren sie sich als Patient und steuern sie welche persönlichen Informationen im Fall einer Vermittlung zu einer medizinischen Einrichtung weitergegeben werden dürfen. Des Weiteren haben sie die Möglichkeit einen ärztlichen Rückruf oder eine persönliche Beratung anzufordern. Sie Unterstützen damit aktiv die Entlastung der Erstannahmestellen in unseren medizinischen Einrichtungen."
              />
            </v-col>
        </v-row>
      </v-container>
      <pageFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card.vue'
import pageFooter from '@/components/pageFooter.vue'

export default {
  name: 'Register',
  components: {
    card,
    pageFooter,
  }
}
</script>
