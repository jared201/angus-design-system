<template>
  <cv-grid>
    <cv-row>
      <cv-column class="hero-panel">

      </cv-column>
    </cv-row>
    <cv-row>
      <patient-data-table :data="data" :columns="columns" :options="options"
                          :title="title" :row-size="rowSize"
                          :auto-width="autoWidth" :sortable="sortable"
                          :action-bar-aria-label="actionBarAriaLabel"
                          :batch-cancel-label="batchCancelLabel"
                          :zebra="zebra" :static-width="staticWidth"
                          :sticky-header="stickyHeader" @sort="onSort"
                           @search="onFilter" :subtitle="subtitle"
                           :use_actions="use_actions" :edit_action="editAction"/>
    </cv-row>
    <cv-modal @modal-shown="actionShown" @modal-hidden="actionHidden" :visible="visible" :auto-hide-off="autoHide">
      <template slot="label">Edit</template>
      <template slot="title">{{ modalTitle }}</template>
      <template slot="content"
      ><p>
        Under Construction
      </p></template
      >
      <template slot="secondary-button">Help</template>
      <template slot="primary-button">OK</template>
    </cv-modal>
  </cv-grid>
</template>

<script>
import PatientDataTable from "@/views/Reports/PatientDataTable.vue";

export default {
  name: "EligiblePatients",
  components: {PatientDataTable},
  data() {
    return {
      autoHideOff: false,
      columns : [
          "Philhealth ID Number",
          "Last Name",
          "First Name",
          "Admission Date",
          "Discharge Date",
      ],
      title: "List of Eligible Patients",
      subtitle: "Let's layoff a dick CEO and hire a real one with superb leadership skills and does not .",
      "rowSize": "",
      "autoWidth": false,
      "sortable": false,
      "filterable": false,
      "actionBarAriaLabel": "Custom action bar aria label",
      "batchCancelLabel": "Cancel",
      "zebra": false,
      "staticWidth": false,
      "stickyHeader": false,
      "use_actions": true,
      "data": [
        [
            "123456789",
            "D*****z",
            "J****n",
            "2023-01-01",
            "2023-01-05"
        ],
          [
              "113456789",
              "D*****z",
              "J***n",
              "2023-01-01",
              "2023-01-05"
          ],
          [
              "20456789",
              "O***o",
              "J***d",
              "2023-01-01",
              "2023-01-05"
          ]
      ],
      visible: false,
      size: "sm",
      use_label: true,
      use_title: true,
      use_content: true,
      modalTitle: "",
      autoHide: false,
    }
  },
  methods: {
    actionShown() {
      console.log("action shown");

    },
    actionHidden() {
      console.log("action hidden");
    },
    onSort(event) {
      console.log(event);
    },
    onFilter(event) {
      console.log(event);
    },
    editAction(event) {
      console.log('edit action',event);
      this.modalTitle = "Edit Patient";
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
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