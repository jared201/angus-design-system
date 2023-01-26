<template>
  <div class="cew-panel-margin">

        <cv-form class="flow-grid">
          <cv-form-item class="form-item-width" >
            <cv-date-picker class="date-label-left"
                            id="date-picker"
                            date-label="Admission Date"
                            placeholder="mm/dd/yyyy"
                            @input="actionInput"
                            kind="single"
            />
          </cv-form-item>
          <cv-form-item>
            <cv-date-picker class="date-label-left input-width"
                            id="date-picker"
                            date-label="Discharge Date"
                            placeholder="mm/dd/yyyy"
                            @input="actionInput"
                            kind="single"
            />
          </cv-form-item>
          <cv-form-item>
          <cv-text-input class="input-width input-margin-top"
                         id="patient-lastname"
                         label="Patient's Complete Last Name"
                         placeholder="Patient's Complete Last Name"
                         invalid-text="A valid value is required"
                         invalid
                         @input="actionInput"
          />
          </cv-form-item>
          <cv-form-item>
            <cv-text-input class="input-width input-margin-top"
                           id="patient-firstname"
                           label="Patient's Complete First Name"
                           placeholder="Member's Complete First Name"
                           invalid-text="A valid value is required"
                           invalid
                           @input="actionInput"
            />
          </cv-form-item>
          <cv-form-item>
            <cv-text-input class="input-width input-margin-top"
                           id="patient-middlename"
                           label="Patient's Complete Middle Name"
                           placeholder="Patient's Complete Middle Name"
                           invalid-text="A valid value is required"
                           invalid
                           @input="actionInput"
            />
          </cv-form-item>
          <cv-form-item>
            <cv-text-input class="input-width input-margin-top"
                           id="patient-suffix"
                           label="Patient's Suffix"
                           placeholder="Jr, Sr, III, etc."
                           invalid-text="A valid value is required"
                           invalid
                           @input="actionInput"
            />
          </cv-form-item>
          <cv-form-item>
            <cv-date-picker kind="single" class="input-width date-label-left input-margin-top"
                            id="patient-birthdate"
                            :date-label="dateLabel"
                            invalid-text="A valid value is required"
                            :pattern="pattern"
                            invalid
                            @input="actionInput"
            />

          </cv-form-item>
          <cv-form-item>
            <cv-dropdown class="input-width bx--label input-margin-top"
                         id="patient-gender"
                         label="Patient's gender"
                         placeholder="Patient's gender"
                         invalid-text="A valid value is required"
                         value=""
                         invalid
                         @input="actionInput"
            >
              <cv-dropdown-item v-for="text in patient_gender" v-bind:key="text.text" :value="text.value">{{ text.text }}</cv-dropdown-item>

            </cv-dropdown>

          </cv-form-item>
        </cv-form>


        <cv-button-set class="button-set button-margin">
          <cv-button kind="primary" @click="backAction">Back</cv-button>
          <cv-button kind="primary" @click="nextAction">Next</cv-button>
        </cv-button-set>


  </div>

</template>

<script>
export default {
  name: "CewStepTwo",
  data() {
    return {
      dateLabel: "Patient's Birthdate",
      pattern: "mm/dd/yyyy",
      patient_gender: [
        {
          text: "Male", value: "M"
        },
        {
          text: "Female", value: "F"
        }
      ],
      membership_type: [
        {
          text: "Employed Private", value: "S"
        },
        {
          text: "Employed Government", value: "G"
        },
        {
          text: "Indigent", value: "I"
        },
        {
          text: "Individually Paying", value: "NS"
        },
        {
          text: "OFW", value: "NO"
        },
        {
          text: "Non Paying Private", value: "PS"
        },
        {
          text: "Non Paying Government", value: "PG"
        }
      ],
    };
  },
  methods: {
    backAction() {
      this.$router.push({ name: "CewStepOne" });
      this.$emit("updateStep", false);
    },
    actionInput() {
      console.log("actionInput");
    },
    nextAction() {
      this.$router.push({ name: "CewStepThree" });
      this.$emit("updateStep", true);
      console.log("submitAction");
    }
  }
}
</script>

<style scoped>
.flow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  margin-top: 1rem;
}
.button-row{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}
.input-width {
  width: 100%;
}
.form-item-width {
  width: 100%;
}
</style>