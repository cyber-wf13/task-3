<template>
  <div class="items-field">
    <h4 class="items-field__title">{{ title }}</h4>
    <table class="items-field__table field-table">
      <thead class="field-table__head">
        <tr class="field-table__row field-table__head-row">
          <th class="field-table__ceil field-table__head-ceil">Id</th>
          <th class="field-table__ceil field-table__head-ceil">Код страны</th>
          <th class="field-table__ceil field-table__head-ceil">Расположение</th>
          <th class="field-table__ceil field-table__head-ceil">Страна</th>
          <th class="field-table__ceil field-table__head-ceil">Название</th>
          <th class="field-table__ceil field-table__head-ceil">Домен</th>
          <th class="field-table__ceil field-table__head-ceil">Ссылка</th>
          <th class="field-table__ceil field-table__head-ceil">Сохранить</th>
        </tr>
      </thead>
      <tbody class="field-table__body">
        <tr
          class="field-table__row field-table__body-row"
          v-for="(item, idx) in listOfItems"
          :key="idx"
          @change="checkSaveHandle(idx, $event)"
        >
          <th class="field-table__ceil field-table__body-ceil">
            {{ idx + 1 }}
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            {{ item.alpha_two_code }}
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            {{ item["state-province"] ? item["state-province"] : "Н/А" }}
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            {{ item.country }}
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            {{ item.name }}
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            <span
              class="field-table__text-accent"
              v-for="domain in item.domains"
              :key="domain"
              >{{ domain }}</span
            >
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            <a
              class="field-table__link"
              v-for="link in item.web_pages"
              :key="link"
              :href="link"
              target="_blank"
              >{{ link }}</a
            >
          </th>
          <th class="field-table__ceil field-table__body-ceil">
            <input type="checkbox" :checked="item.checked" />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import TextField from "./TextField.vue";
export default {
  props: {
    listItems: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      default: "Default title",
    },
  },
  mounted() {
    this.listOfItems = [...this.checkUniversLocalStorage()];
  },
  data() {
    return {
      listOfItems: [...this.listItems],
      checkedItems: localStorage.getItem("checkedItems") || 0,
    };
  },
  methods: {
    tableChangeHandle(e) {
      const inputValue = e.currentTarget.value;

      this.listOfItems.push(inputValue);
      this.$emit("tableChange", this.listOfItems);
    },
    checkSaveHandle(idx, e) {
      let isChecked = e.target.checked;
      if (isChecked) {
        this.listOfItems[idx].checked = true;
        this.saveUnivers.push(this.listOfItems[idx]);
        this.checkedItems = Number(this.checkedItems) + 1;
      } else {
        this.listOfItems[idx].checked = false;
        const listItemIdx = this.saveUnivers.findIndex((saveItem) => {
          return saveItem.name == this.listOfItems[idx].name;
        });
        this.saveUnivers.splice(listItemIdx, 1);
        this.checkedItems = Number(this.checkedItems) - 1;
      }
      localStorage.setItem("univers", JSON.stringify(this.saveUnivers));
      localStorage.setItem("checkedItems", this.checkedItems);
    },
    checkUniversLocalStorage() {
      if (localStorage.getItem("univers")) {
        const savedListItems = JSON.parse(localStorage.getItem("univers"));
        return savedListItems;
      }
      return [];
    },
  },
  watch: {
    listItems(newList) {
      const listUpdated = newList.map((item) => {
        return Object.assign(item, { checked: false });
      });

      this.listOfItems = [...this.checkUniversLocalStorage(), ...listUpdated];
    },
  },
  computed: {
    saveUnivers() {
      return [...this.checkUniversLocalStorage()];
    },
  },
  components: { TextField },
};
</script>
<style lang="scss">
.items-field {
  overflow-x: auto;

  &__title {
    font-weight: 500;
    font-size: rem(16);
    color: $c-accent;
  }

  &__control {
    width: 100%;
  }

  &__table {
    margin: 15px 0 0;
  }
}

.field-table {
  width: 100%;
  border-collapse: collapse;
  font-size: rem(16);

  &__head {
    background-color: rgba(#ccc, 0.6);
  }

  &__body-row {
    @media (any-hover: hover) {
      &:hover {
        background-color: $c-bg;
      }
    }
  }

  &__body-ceil {
    font-weight: 300;
  }

  &__ceil {
    padding: 12px 10px 12px;
    text-align: left;
  }

  &__link {
    color: $c-accent;
    font-weight: 600;
  }

  &__text-accent {
    color: $c-accent;
    font-weight: 300;
  }
}
</style>