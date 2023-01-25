<template>
  <cv-grid>
    <cv-row>
      <cv-column>
        <cv-row>
          <cv-column class="hero-panel">
            <cv-tile >
                <h1 class="hero-text">Clarity Philhealth eClaims</h1>
                <p class="hero-subtitle">Better healthcare solution for the nation</p>
            </cv-tile>
          </cv-column>
        </cv-row>
        <cv-row class="row_spacing">
          <cv-column>
            <cv-tile kind="clickable" @click="openCEW">
              <img class="img_left" :src="icons.cew"/>
              <h1 class="hero-text">CEW</h1>
              <p class="hero-subtitle">Click here to verify eligiblity</p>
            </cv-tile>
          </cv-column>
          <cv-column>
            <cv-tile kind="clickable" @click="openEclaims">
              <img class="img_left" :src="icons.eclaims"/>
              <h1 class="hero-text">eClaims</h1>
              <p class="hero-subtitle">Click here to submit an eClaim</p>
            </cv-tile>

          </cv-column>

        </cv-row>
      </cv-column>
    </cv-row>
  </cv-grid>
</template>

<script>
export default {
  name: "EclaimsPage",
  methods: {
    openEclaims() {
      this.$router.push("/eclaims_form");
    },
    openCEW() {
      this.$router.push("/cew_form/cew_step_one");
    }
  },
  data () {
    return {
      icons : {
        eclaims: require("../../assets/icons/svg/outline/objects/desktop_app.svg"),
        cew: require("../../assets/icons/svg/outline/objects/spreadsheets.svg"),
      }
    }
  },
}
</script>

<style scoped>
.img_left {
  float: left;
  margin-right: 10px;
}
.row_spacing{
  margin-top: 20px;
}

.hero-text {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
}
.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
}
</style>