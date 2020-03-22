<template>
  <div class="home">
    <heroBanner :data="connectionDetails" />
    <welcomePage/>
    <v-container>
      <v-row class="mb-12" no-gutters>
        <v-col lg="10">
          <h2>Was ist die MED?</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </v-col>
      </v-row>
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
      </v-row>
    </v-container>
    <signup />
  </div>
</template>

<script>
// @ is an alias to /src
import heroBanner from '@/components/heroBanner.vue'
import welcomePage from '@/components/welcomePage.vue'
import signup from '@/components/signup.vue'

export default {
  name: 'Home',
  components: {
    heroBanner,
    welcomePage,
    signup
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
    this.$http.get('http://mcc1-dev.eu-central-1.elasticbeanstalk.com/call-statistics')
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
