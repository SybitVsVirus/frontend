<template>
  <div class="home">
    <heroBanner :data="connectionDetails" />
    <welcomePage/>
    <v-container>
      <v-row class="mb-12" no-gutters>
        <v-col lg="10">
          <h2>Was ist MED und der digitale medizinische Assistent?</h2>

          <p>Die Medizinische Erstauskunft Deutschland übernimmt den Erstkontakt und Vorqualifizierung einer medizinischen Kontaktaufnahme.</p>
          <you-tube videoId="dsLWAcCtxWA" />
          <p>In der aktuellen Situation der Corona Epidemie laufen Telefonleitungen heiß, ärztliche Einrichtungen und Praxen sind am Anschlag. Bürger mit Symptomen werden unsicher. Schon ein leichtes Kratzen im Hals sorgt für starke Beunruhigung.</p>
          <p>Der digitale medizinische Assistent hilft an dieser Stelle. Er übernimmt die Kontaktaufnahme des Patienten, bevor der Anruf direkt in der Arztpraxis ankommt.</p>
          <p>Wenige entscheidende Fragen dienen zur Vorqualifizierung und zur Generierung der Handlungsempfehlung. Abhängig dieser Informationen wird der Anrufer mit Informationen versorgt oder an eine persönliche Beratung zur weiteren Anamnese oder seinen Arzt weitergeleitet. Die gesammelten Informationen werden dann der ausgewählten medizinischen Einrichtung zum aktiven Anruf bereitgestellt.</p>
          <p>Die Vorqualifizierung beginnend mit der Rufannahme bis zur Weiterleitung an die persönliche Beratung ist komplett softwarebasiert und beliebig skalierbar. Der digitale medizinische Assistent soll möglichst viele Situationen, die keinen Arzttermin erfordern, erkennen und direkt beantworten oder alternativ an einen persönlichen Berater weiterleiten.</p>
          <p>&nbsp;</p>
          <p>Unser Ziel ist es den Arbeitsaufwand im Empfang beim Arzt zu reduzieren sowie Bürger und Patienten Handlungsempfehlungen zu ihren genannten Symptomen zu geben. Ein wichtiger Aspekt ist außerdem die Risikominimierung für das Personal der Arztpraxis, die durch gezielte Wegweisung von Corona-Verdachtspatienten, erreicht wird. Diesen Verdachtspersonen wird ein alternativer Weg als der Besuch beim Hausarzt empfohlen.</p>
          <p>In der jetzigen Situation gibt es fast täglich aktualisierte Regeln zum Verhalten im Falle eines Infektionsverdacht. Der digitale medizinische Assistent wird zentral mit Informationen versorgt und ist stehts up-to-date.</p>
          <p>Mittels dem MED bieten wir eine deutschlandweite zentrale Rufnummer, um Antworten und Empfehlungen für Personen, die selbst einen Corona Verdacht haben, zu geben.</p>
          <p>Potenziell bieten wir zukünftig die Möglichkeit freie Kapazitäten direkt zur persönlichen Beratung und möglichen Verfeinerung der Anamnese einzusetzen. Qualifiziertes Personal im Ruhestand, in Quarantäne oder anderer Verfügbarkeit kann hierdurch effizient und dezentral eingesetzt werden und trägt somit aktiv zur Entlastung des Gesundheitssystems und zur Betreuung der Bevölkerung bei.</p>
        </v-col>
      </v-row>

      <!--
      <v-row class="mb-12">
        <v-col lg="12">
          <h2>USP's</h2>
        </v-col>
        <v-col lg="6">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </v-col>
        <v-col lg="6">
          <h3>Sed do eiusmod tempor incididunt ut labore</h3>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </v-col>
        <v-col lg="6">
          <h3>Dolor sit amet, consectetur adipiscing incididunt ut labore</h3>
          <p>Amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Lamco laboris nisi.</p>
        </v-col>
        <v-col lg="6">
          <h3>LConsectetur adipiscing elit, sed do eiusmod ut labore</h3>
          <p>Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <v-col lg="12">
          <h2>Wer sind unsere Zielgruppen?</h2>
        </v-col>
        <v-col lg="4">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          <v-btn text>Mehr Infos</v-btn>
        </v-col>
        <v-col lg="4">
          <h3>Sed do eiusmod tempor incididunt ut labore</h3>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          <v-btn text>Mehr Infos</v-btn>
        </v-col>
        <v-col lg="4">
          <h3>Dolor sit amet, consectetur adipiscing incididunt ut labore</h3>
          <p>Amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Lamco laboris nisi.</p>
          <v-btn text>Mehr Infos</v-btn>
        </v-col>
      </v-row>-->
    </v-container>
    <!--<signup />-->
    <pageFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import heroBanner from '@/components/heroBanner.vue'
import welcomePage from '@/components/welcomePage.vue'
import pageFooter from '@/components/pageFooter.vue'
import youTube from '@/components/youTube.vue'

export default {
  name: 'Home',
  components: {
    heroBanner,
    welcomePage,
    pageFooter,
    youTube
  },
  data: () => {
    return {
      connectionDetails: {
        numberOfCallers: 0,
        numberOfCoronaCases: 0,
        numberOfCallCenterRedirections: 0,
        date: Date.now()
      }
    }
  },
  created () {
    // Call API to get data
    this.$http.get('https://mcc1-dev.eu-central-1.elasticbeanstalk.com/call-statistics')
      .then(response => {
        if (response.data.success) {
          this.connectionDetails = response.data.data;
          this.connectionDetails.date = Date.now();
        }
      })
      .catch(error => {
        console.log('Error', error)
      });
  },
  mounted () {}
}
</script>
