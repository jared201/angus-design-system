<template>
  <cv-grid>
    <cv-row>
      <cv-column class="hero-panel">
        <p class="hero-title">CEW Form</p>
        <cv-progress
            :vertical="vertical" @step-clicked="actionStepClicked">
          <cv-progress-step label="Step 1" additional-info="Optional info" complete description="This is the first step" @step-clicked="actionStepClicked" />
          <cv-progress-step label="Step 2 is a bit longer" current description="This is the second step" @step-clicked="actionStepClicked"/>
          <cv-progress-step label="Step 3"  tip-text="Step 3 has hard coded tip" description="This is the third step" @step-clicked="actionStepClicked" />
        </cv-progress>
      </cv-column>
    </cv-row>
  </cv-grid>
</template>

<script>
export default {
  name: "CewPage",
  methods: {
    actionStepClicked(step) {
      console.log(step);
    }
  },
}
</script>

<style scoped>
.hero-panel {
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.hero-title {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
}
</style>