<template>
  <div class="home">
    <heroBanner/>
    <welcomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import heroBanner from '@/components/heroBanner.vue'
import welcomePage from '@/components/welcomePage.vue'

export default {
  name: 'Home',
  components: {
    heroBanner,
    welcomePage
  }
}
</script>
