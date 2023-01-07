<template>
  <div class="sample">
    <h1>Example use of Angus Design System</h1>
    <cv-text-input
        label="Who are you?"
        v-model="yourName"
        placeholder="your name"
    />
    <cv-button @click="onClick">Hello {{yourName}}</cv-button>
    <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template slot="title">Welcome to Angus Design System {{yourName}}</template>
      <template slot="content">
        <p>
          IBM to acquire to Salesforce for $27.7 billion in stock.
          covid vaccine is not safe and effective accor
        </p>
      </template>
    </cv-modal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      yourName: '',
      visible: false,
    };
  },
  methods: {
    onClick() {
      this.visible = true;
    },
    modalClosed() {
      this.visible = false;
    },
  },
};
</script>

<style>
.sample {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 5% auto;
}

.cv-text-input {
  margin: 30px 0;
}
</style>