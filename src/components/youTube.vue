
<template>
  <div :style="styles.widthLimitter">
    <div :style="styles.renderingAreaProvider">
      <iframe :src="src" :style="styles.iframe" frameborder="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'youTube',
  props: ["maxWidth", "videoId"],
  computed: {
    src() {
      return `https://www.youtube-nocookie.com/embed/${this.videoId}`;
    }
  },
  data() {
    return {
      styles: {
        widthLimitter: {
          maxWidth: this.maxWidth ? this.maxWidth : null
        },
        renderingAreaProvider: {
          background: "#f0f0f0",
          height: 0,
          margin: "1rem 0",
          /*
           * - '56.25%' indicates the aspect rasio (9/16 = 56.25%).
           * - note that percentage inside 'padding-(top|bottom)' is calculated based on
           *   its current width. this is a specification of 'calc' used inside
           *   the 'padding-(top|bottom)' property.
           *
           * see: https://nathan.gs/2018/01/07/responsive-slideshare-iframe/
           */
          paddingBottom: "calc(56.25%)",
          position: "relative",
          width: "100%"
        },
        iframe: {
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%"
        }
      }
    };
  }
};
</script>
