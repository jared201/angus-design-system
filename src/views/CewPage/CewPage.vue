<template>
  <cv-grid>
    <cv-row>
      <cv-column class="hero-panel card">
        <p class="hero-title">CEW Form</p>
        <cv-progress
            :vertical="vertical" @step-clicked="actionStepClicked">
          <cv-progress-step label="Step 1" additional-info="Member's info" :complete="complete1" description="This is the first step" @step-clicked="actionStepClicked" />
          <cv-progress-step label="Step 2" current additional-info="Patient's info" :complete="complete2" @step-clicked="actionStepClicked"/>
          <cv-progress-step label="Step 3"  additional-info="Employment Info" :complete="complete3" @step-clicked="actionStepClicked" />
        </cv-progress>
      </cv-column>
    </cv-row>
    <cv-row>
      <cv-column class="form-background panel-border">
<!--        <CewStepOne/>-->
        <router-view />

      </cv-column>
    </cv-row>
  </cv-grid>

</template>

<script>
// import CewStepOne from "@/views/CewPage/CewStepOne.vue";

export default {
  name: "CewPage",
  data() {
    return {
      vertical: false,
      complete1: false,
      complete2: false,
      complete3: false,
    };

  },
  // components: {CewStepOne},
  methods: {
    actionStepClicked(step) {
      console.log(step);
    },

  },
  watch: {
    $route(to, from) {
      console.log(to);

      console.log(from);
      if (from.name == 'CewStepOne' && to.name == 'CewStepTwo') {
        this.complete1 = true;
      }
      if (from.name == 'CewStepTwo' && to.name == 'CewStepThree') {
        this.complete2 = true;
      }
      if(from.name == 'CewStepThree' && to.name == 'CewStepTwo') {
        this.complete3 = false;
        this.complete2 = false;
      }
      if(to.name=='CewStepOne') {
        this.complete1 = false;
        this.complete2 = false;
        this.complete3 = false;
      }

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
.flushed-width-panel {
  width: 100%;
  margin: fill;
}
.form-background {
  background-color: white;
}
.text-input-half {
  width: 100%;
}
.panel-border {
  border: 1px solid #dfe3e6;
  border-radius: 3px;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

</style>