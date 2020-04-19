<template>
  <div>
    <formulate-form class="login-form">
      <h2 class="form-title">Dynamic</h2>
      
      <formulate-input
        @submit="submitHandler"
        v-for="input in inputs"
        :key="input.name"
        v-bind="input">
      <formulate-input>

    </formulate-form>
  </div>
</template>

<script>
module.exports = {
  props: {
    jsonFile: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      inputs: {}
    }
  },
  methods: {
    submitHandler(data) {
      alert(`Thank you, ${data.name}`);
    }
  },

  mounted() {
      console.log(this.jsonFile)
      fetch(this.jsonFile)
        .then(r => r.json())
        .then(json => {
          console.log(json)
          this.inputs=json;
        });
    }
}
</script>

<style scoped>
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
</style>

