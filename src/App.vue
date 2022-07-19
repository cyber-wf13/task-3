<template>
  <div class="container">
    <div class="content">
      <form class="content__form form" @submit.prevent="handleSubmitForm">
        <TextField
          class="form__field"
          title="Введите страну"
          @change="countryInput = $event.target.value"
        />
        <button class="form__button form__submit" type="submit">
          Отправить
        </button>
        <button
          class="form__button form__reset"
          type="reset"
          @click="handleResetForm"
        >
          Сброс
        </button>
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
  mounted() {},
  data() {
    return {
      countryInput: "",
      universInfo: [],
    };
  },
  methods: {
    async getUnivers(country) {
      let query = `http://universities.hipolabs.com/search?country=${country}`;
      const response = await fetch(query);

      if (response.ok) {
        return response.json();
      }
    },
    handleSubmitForm() {
      if (this.countryInput == "") {
        return;
      }
      this.getUnivers(this.countryInput).then((info) => {
        if (info.length != 0) {
          this.universInfo = [...info];
        }
      });
    },
    handleResetForm() {
      this.countryInput = "";
      this.universInfo = [];
    },
  },
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
