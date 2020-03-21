<template>
  <div class="home">
    <welcomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import welcomePage from '@/components/welcomePage.vue'

export default {
  name: 'Home',
  components: {
    welcomePage
  }
}
</script>
