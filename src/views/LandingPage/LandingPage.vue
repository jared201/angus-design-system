<template>
  <cv-grid>
    <cv-row>
      <cv-column>
        <cv-row>
          <cv-column class="hero-panel">
            <div class="hero-text">
              Angus Design System
              <p class="hero-subtitle">
                Angus Design System is a Vue.js and Carbon component library for building healthcare applications.
              </p>
            </div>
          </cv-column>
        </cv-row>
        <cv-row>
          <cv-column class="hero-panel">
            <div class="hero-text">
              <h2>Getting Started</h2>
              <p class="hero-subtitle">
                To get started, install the Angus Design System package and its peer dependencies.
              </p>
              <p class="hero-subtitle">
                <code>npm install @angusds/angus-design-system</code>
              </p>
              <p class="hero-subtitle">
                <code>yarn add @angusds/angus-design-system</code>
              </p>
              <p>
                Time check: {{time}}
              </p>
            </div>
          </cv-column>
        </cv-row>
      </cv-column>
      <cv-column>
        <div class="hero-panel">
          <img src="../../assets/logo.png" alt="Angus Design System" />
        </div>
      </cv-column>
    </cv-row>
  </cv-grid>
</template>

<script>
export default {
  name: "LandingPage",
  data () {
    return {
      time: this.getTime()
    }
  },
  methods: {
    getTime () {
      setInterval(() => {
        this.time = new Date().toLocaleTimeString()
      }, 1000)

    }
  },
}
</script>

<style scoped>
.hero-panel {
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}
.hero-text {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
}
.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
}
</style>