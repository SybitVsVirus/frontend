<template>
    <v-footer class="pageFooter">
      <v-container fluid class="pa-0 ma-0">
        <v-row>
            <v-col cols="4">
                <small>
                Entwickelt im Rahmen von
                <a href="https://wirvsvirushackathon.org/" target="_blank" rel="nofollow">
                    <v-img src="https://wirvsvirushackathon.org/wp-content/uploads/2020/03/12-scaled.jpg" alt="#WirVsVirusHackathon" />
                </a></small>
                <small>Herausforderung: <a href="https://devpost.com/software/1_252_a_virtueller_telefonassistent" target="_blank" rel="nofollow">1_252_a_virtueller_telefonassistent</a></small>
            </v-col>
            <v-col cols="4">
                <small>Auf Twitter folgen:<br />
                    <a href="https://twitter.com/MedErstauskunft" target="_blank">Medizinische Erstauskunft Deutschland</a></small>
            </v-col>
            <v-col cols="4">
                <p>
                    <small><a href="/datenschutz">Datenschutz</a><br />
                    <a href="/impressum">Impressum</a></small>
                </p>
            </v-col>
        </v-row>
      </v-container>
    </v-footer>
</template>
<script>
    export default {
        name: 'pageFooter',
    }
</script>
<style scoped>
    .pageFooter a {color: #000;}
</style>