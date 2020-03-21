<template>
  <div class="herobanner">
      <div class="herobanner__box">
          Die Medizinische Erstauskunft Deutschland unterstützt Sie bei ...
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroBanner',
  }
</script>

<style scoped>
    .herobanner {
        background: grey;
        display: block;
        height: calc(100vh - 130px);
        position: relative;
    }
    .herobanner__box{
        display: block;
        font-size: 24px;
        left: 5vw;
        padding: 32px;
        position: absolute;
        top: 35vh;
        width: 350px;
    }
</style>