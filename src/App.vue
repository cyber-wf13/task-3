<template>
  <div class="container">
    <div class="content">
      <form class="content__form form">
        <TextField class="form__field" title="Введите страну" />
        <button class="form__button form__submit" type="submit">
          Отправить
        </button>
        <button class="form__button form__reset" type="reset">Сброс</button>
      </form>

      <ItemsField />
    </div>
  </div>
</template>

<script>
import ItemsField from "./components/ItemsField.vue";
import TextField from "./components/TextField.vue";
export default {
  name: "App",
  components: { TextField, ItemsField },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";

.content {
  padding: 50px 0 0;

  &__form {
    margin-bottom: em(30);
  }
}

.form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  &__field {
    flex: 1 0 70%;
  }

  &__button {
    border: none;
    border-radius: $radius;
    background-color: $c-bg;
    text-align: center;
    font-size: rem(18);
    padding: 5px;
    cursor: pointer;
  }
}
</style>
