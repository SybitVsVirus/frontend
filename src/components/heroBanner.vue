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
        background: #fff url(../assets/herobanner.jpg) center center no-repeat;
        display: block;
        height: calc(100vh - 130px);
        position: relative;
    }
    .herobanner__box{
        background: rgba(255,255,255,0.75);
        display: block;
        font-size: 24px;
        left: 5vw;
        padding: 32px;
        position: absolute;
        top: 35vh;
        width: 350px;
    }
</style>