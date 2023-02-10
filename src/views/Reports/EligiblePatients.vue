<template>
  <cv-grid>
    <cv-row>
      <cv-column class="hero-panel">
        <cv-tile >
            <h1 class="hero-text">Clarity Philhealth eClaims</h1>
            <p class="hero-subtitle">List of Eligible Patients</p>
        </cv-tile>
      </cv-column>
    </cv-row>
    <cv-row>
      <patient-data-table :data="data" :columns="columns" :options="options"/>
    </cv-row>
  </cv-grid>
</template>

<script>
import PatientDataTable from "@/views/Reports/PatientDataTable.vue";

export default {
  name: "EligiblePatients",
  components: {PatientDataTable},
  data() {
    return {
      columns : [
          "Philhealth ID Number",
          "Last Name",
          "First Name",
          "Admission Date",
          "Discharge Date",
      ]
    }
  }
}
</script>

<style scoped>
.hero-panel {
  margin-top: 60px;
}
.hero-text {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0;
}
.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
}
</style>