<template>
  <div class="herobanner">
      <div class="herobanner__box">
          <span class="herobanner__total">Bei der MED Hotline gingen insgesamt {{data.numberOfCallers}} Anrufe ein</span>
          <span class="herobanner__info">Davon waren {{data.numberOfCoronaCases}} Coronaverdachtsfälle und {{data.numberOfCallCenterRedirections}} Person(en) nutzten das Angebot unseres Beratungszentrums.</span>
          <span class="herobanner__datetime">Stand {{$moment(data.date).format('DD.MM.YYYY HH:mm')}} Uhr</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroBanner',
    props: {
      data: {
        required: true,
        type: Object,
      }
    }
  }
</script>

<style scoped>
    .herobanner {
        background: #fff url(../assets/herobanner.jpg) center center no-repeat;
        display: block;
        height: calc(100vh - 130px);
        position: relative;
    }

    .herobanner__box {
        background: rgba(255,255,255,0.75);
        bottom: 0;
        display: block;
        font-size: 24px;
        left: 0;
        max-width: 500px;
        padding: 32px;
        position: absolute;
        transition: all .5s ease 0s;
    }

    @media screen and (min-width: 600px) {
      .herobanner__box {
        bottom: 20vh;
        left: 4vw;
      }
    }

    .herobanner__total {
      display: block;
      font-size: 16px;
      padding: 16px 0;
    }

    .herobanner__info {
      display: block;
      font-size: 16px;
      padding: 16px 0;
    }

    .herobanner__datetime {
      display: block;
      font-size: 14px;
    }

</style>