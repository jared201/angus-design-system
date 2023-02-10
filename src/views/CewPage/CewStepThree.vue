<template>
<div class="cew-panel-margin">
  <cv-form class="cew-form-grid">
    <cv-form-item>
      <cv-dropdown class="input-width bx--label input-margin-top"
                   id="membership-type"
                   label="Membership Type"
                   placeholder="Membership Type"
                   invalid-text="A valid value is required"
                   value=""
                   invalid
                   @input="actionInput"
      >
        <cv-dropdown-item v-for="text in membership_type" v-bind:key="text.text" :value="text.value">{{ text.text }}</cv-dropdown-item>

      </cv-dropdown>

    </cv-form-item>
    <cv-form-item>
      <cv-text-input class="input-width input-margin-top"
                     id="pen"
                     label="PEN"
                     placeholder="Philhealth Employer Number"
                     invalid-text="A valid value is required"
                     invalid
                     @input="actionInput"
                     v-model="pen"
      />
    </cv-form-item>
    <cv-form-item>
      <cv-text-input class="input-width input-margin-top"
                     id="employer-name"
                     label="Registered name of the employer"
                     placeholder="Registered name of the employer"
                     invalid-text="A valid value is required"
                     invalid
                     @input="actionInput"
      />
    </cv-form-item>
    <cv-form-item>
      <cv-text-input class="input-width input-margin-top"
                     id="rvs-code"
                     label="RVS Code"
                     placeholder="RVS Code of the surgical procedure done(if any)"
                     invalid-text="A valid value is required"
                     invalid
                     @input="actionInput"
      />
    </cv-form-item>
    <cv-form-item>
      <cv-text-input class="input-width input-margin-top"
                     id="total-amount-actual"
                     label="Actual Total Amount"
                     placeholder="000,000.00"
                     invalid-text="A valid value is required"
                     invalid
                     @input="actionInput"
      />
    </cv-form-item>
    <cv-form-item>
      <cv-text-input class="input-width input-margin-top"
                     id="total-amount-claimed"
                     label="Amount to be reimbursed by PhilHealth"
                     placeholder="000,000.00"
                     invalid-text="A valid value is required"
                     invalid
                     @input="actionInput"
      />
    </cv-form-item>
  </cv-form>
  <cv-button-set class="button-set button-margin">
    <cv-button kind="primary" @click="backAction">Back</cv-button>
    <cv-button kind="secondary" @click="submitAction">Submit</cv-button>
  </cv-button-set>
  <cv-loading
      :active="isActive"
      :overlay="overlay"></cv-loading>
  <cv-toast-notification v-if="visible"
             :title="title"
             :sub-title="subTitle"
             :caption="caption"
             @close="doClose"
             :low-contrast="lowContrast"
             :kind="kind"
             :hide-close-button="hideCloseButton">

  </cv-toast-notification>
</div>
</template>

<script>
export default {
  name: "CewStepThree",
  data () {
    return {
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
      isActive: false,
      overlay: true,
      visible: false,
      title: '',
      subTitle: 'Your form has been submitted.',
      caption: 'Thank you for using our service.',
      hideCloseButton: false,
      lowContrast: true,
      pen: '',
      kind: ''
    }
  },
  methods: {
    backAction() {
      this.$router.push({name: "CewStepTwo"});
    },
    submitAction() {
      this.$emit('submitAction');
      this.isActive = true;
      console.log(this.pen);

      setInterval(() => {
        this.isActive = false;
       if(this.pen == '1234567890') {
         this.visible = true;
         this.kind = 'success';
         this.title = 'Success';
         this.caption = 'Patient is eligible for reimbursement.';
       } else {
         this.visible = true;
         this.kind = 'error';
         this.title = 'Rejected';
         this.caption = 'Patient is not eligible for PhilHealth reimbursement.';
       }
      }, 2000);
    },
    actionInput(event) {
      this.$emit('actionInput', event);
    },
    doClose() {
      this.visible = false;
    }
  },
}
</script>

<style scoped>

</style>