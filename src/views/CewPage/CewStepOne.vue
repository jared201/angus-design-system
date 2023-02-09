<template>
  <div class="panel-margin">
    <cv-form class="text-input-half flow-grid">
      <cv-form-item>
        <cv-text-input class="input-width"
                       id="pin"
                       label="PIN"
                       placeholder="Philhealth Identification Number"
                       invalid-text="A valid value is required"
                       invalid
                       @input="actionInput"
                       v-model = "memberInfo.pin"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-text-input class="input-width"
                       id="member-lastname"
                       label="Member's Complete Last Name"
                       placeholder="Member's Complete Last Name"
                       invalid-text="A valid value is required"
                       invalid
                       @input="actionInput"
                       v-model = "memberInfo.memberLastName"
                       name="memberLastName"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-text-input class="input-width"
            id="member-firstname"
            label="Member's Complete First Name"
            placeholder="Member's Complete First Name"
            invalid-text="A valid value is required"
            invalid
            @input="actionInput"
            v-model = "memberInfo.memberFirstName"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-text-input class="input-width"
            id="member-middlename"
            label="Member's Complete Middle Name"
            placeholder="Member's Complete Middle Name"
            invalid-text="A valid value is required"
            invalid
            @input="actionInput"
            v-model="memberInfo.memberMiddleName"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-text-input class="input-width"
                       id="member-suffix"
                       label="Member's Suffix"
                       placeholder="Jr, Sr, III, etc."
                       invalid-text="A valid value is required"
                       invalid
                       @input="actionInput"
                       v-model="memberInfo.memberSuffix"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-text-area class="input-width"
            id="member-address"
            label="Member's Complete Address"
            placeholder="Member's Complete Address"
            invalid-text="A valid value is required"
            invalid
            @input="actionInput"
            v-model="memberInfo.memberAddress"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-text-input class="input-width"
            id="zipcode"
            label="Zip Code"
            placeholder="Zip Code"
            invalid-text="A valid value is required"
            invalid
            @input="actionInput"
                       v-model="memberInfo.zipcode"
        />
      </cv-form-item>
      <cv-form-item>
        <cv-dropdown class="input-width bx--label"
            id="patient-is"
            label="Patient is"
            placeholder="Patient is"
            invalid-text="A valid value is required"
                     value=""
            invalid
            @input="actionInput"
            v-model="selectedPatientType"
        >
          <cv-dropdown-item v-for="text in patientIs" v-bind:key="text.text" :value="text.value" >{{ text.text }} </cv-dropdown-item>

        </cv-dropdown>

      </cv-form-item>
      <cv-form-item>
        <cv-date-picker kind="single" class="input-width bx--label"
                        id="member-birthdate"
                        :date-label="dateLabel"
                        invalid-text="A valid value is required"
                        :pattern="pattern"
                        invalid
                        @input="actionInput"
                        v-model="memberInfo.memberBirthdate"
        />

      </cv-form-item>


    </cv-form>
    <cv-button class="button-left" @click="nextStep">Next</cv-button>
  </div>
</template>

<script>
import CewPage from "@/views/CewPage/index";
import { setMemberInfo } from "@/views/CewPage/StepModel";

export default {
  name: "CewStepOne",
  data() {
    return {
      dateLabel: "Member's Birthdate",
      pattern: "\\d{12}/\\d{12}/\\d{4}",
      patientIs: [
        { text: "Member", value: "M" },
        { text: "Spouse", value: "S" },
        { text: "Child", value: "C" },
        { text: "Parent", value: "P" }
      ],
      selectedPatientType: '',
      memberInfo : {
        pin: '',
        memberLastName: '',
        memberFirstName: '',
        memberMiddleName: '',
        memberSuffix: '',
        memberAddress: '',
        zipcode: '',
        patientIs: '',
        memberBirthdate: ''
      }
    };
  },
  methods: {
    actionInput(event) {
      console.log(event);
    },
    nextStep() {
      this.$router.push("/cew_form/cew_step_two");
      this.$emit("updateStep", true);
      CewPage.data().complete1 = true;
      console.log(this.memberInfo.memberLastName);
      console.log(this.memberInfo);
    },
    updatePatientType(event) {
      console.log(event);
      this.selectedPatientType = event;
    }
  },
  watch: {
    selectedPatientType: function (val) {
      console.log('selectedPatientType',val);
      this.selectedPatientType = val;
      this.memberInfo.patientIs = val;
      if (val == 'M'){
        console.log('member');
        setMemberInfo(this.memberInfo);
      }
    }
  }
}
</script>

<style scoped>
.panel-margin {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.panel-left-margin {
  margin-left: 1rem;
}
.card-footer {
  padding-top: 1rem;
  padding: 1rem;
  background-color: white;
  alignment: left;
  text-align: left;
}
.flow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}
label.bx--label {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
}
.bx--label{
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
}
textarea.bx--text-area {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 5.25rem;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
}
.button-left {
 margin-top: 1rem;
  float: left;
}
</style>