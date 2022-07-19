<template>
  <label class="input-field" :class="$attrs.class">
    <h4 class="input-field__title">{{ title }}</h4>
    <input
      type="text"
      class="input-field__control"
      @change="$attrs.onChange"
      :placeholder="$attrs.placeholder"
    />
  </label>
</template>
<script>
export default {
  props: {
    title: {
      default: "Control title",
      type: String,
    },
  },
  inheritAttrs: false,
};
</script>
<style lang="scss">
.input-field {
  display: flex;
  align-items: center;

  &__title {
    color: $c-accent;
    margin-right: 5px;
    max-width: 90px;
    flex: 0 0 100%;
    word-wrap: break-word;
  }

  &__control {
    background-color: $c-bg;
    border: 1px solid rgba(#ccc, 0.5);
    border-radius: 4px;
    padding: 7px 18px;
    outline: none;
    height: 40px;
    flex: 1 0 auto;
    transition: background-color 0.2s ease-out;

    &:focus {
      background-color: #fff;
    }
  }
}
</style>