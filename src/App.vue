<template>
  <div class="container">
    <div class="content">
      <h2 class="content__title">
        Элементов сохранено: {{ savedListItemsCount }}
      </h2>
      <form class="content__form form" @submit.enter.prevent="handleSubmitForm">
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

      <ItemsField title="Список університетів" :listItems="universInfo" />
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
      savedListItemsCount: Number(localStorage.getItem("checkedItems")) || 0,
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
      localStorage.clear();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";

.content {
  padding: 50px 0 0;

  &__title {
    color: $c-accent;
    font-size: rem(20);
    margin-bottom: rem(30);
  }

  &__form {
    margin-bottom: rem(30);
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
