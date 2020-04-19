<template>
  <formulate-form
    class="login-form"
    v-model="formValues"
    @submit="submitHandler"
  >
    <h2 class="form-title">Register</h2>
    <p>
      You can place any elements you want inside a form. The inputs themselves
      can even be deeply nested.
    </p>
    <formulate-input
      name="name"
      type="text"
      label="Your name"
      placeholder="Your name"
      validation="required"
    ></formulate-input>
    <formulate-input
      name="email"
      type="email"
      label="Email address"
      placeholder="Email address"
      validation="required|email"
    /></formulate-input>
    <div class="double-wide">
      <formulate-input
        name="password"
        type="password"
        label="Password"
        placeholder="Your password"
        validation="required"
      /></formulate-input>
      <formulate-input
        name="password_confirm"
        type="password"
        label="Confirm your password"
        placeholder="Confirm password"
        validation="required|confirm"
        validation-name="Confirmation"
      /></formulate-input>
    </div>
    <formulate-input
      type="submit"
      label="Register"
    /></formulate-input>
    </div>
    <pre
      class="code"
      v-text="formValues"
    />
  </formulate-form>

</template>

<script>
module.exports = {
  data () {
    return {
      formValues: {}    
    }
  },
  methods: {
    submitHandler (data) {
      alert(`Thank you, ${data.name}`)
    }
  }
};
</script>

<style scoped>
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: .5em;
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
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
</style>

