<template>
<cv-grid>
  <cv-row>
    <cv-form class="flow-grid">
       <cv-form-item>
         <cv-date-picker
           id="date-picker"
           label="Date picker label"
           placeholder="mm/dd/yyyy"
           @input="actionInput"
          />
       </cv-form-item>
    </cv-form>
  </cv-row>
</cv-grid>
</template>

<script>
export default {
  name: "CewStepTwo"
}
</script>

<style scoped>
.flow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}
</style>