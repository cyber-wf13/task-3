<template>
  <fieldset class="items-field">
    <legend class="items-field__legend">{{ title }}</legend>
    <table class="items-field__table field-table">
      <thead class="field-table__head">
        <tr class="field-table__row field-table__head-row">
          <th class="field-table__ceil field-table__head-ceil">Id</th>
          <th class="field-table__ceil field-table__head-ceil">Текст</th>
        </tr>
      </thead>
      <tbody class="field-table__body">
        <tr
          class="field-table__row field-table__body-row"
          v-for="(item, idx) in listOfItems"
          :key="idx"
        >
          <th class="field-table__ceil field-table__body-ceil">{{ idx }}</th>
          <th class="field-table__ceil field-table__body-ceil">{{ item }}</th>
        </tr>
      </tbody>
    </table>
  </fieldset>
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
  data() {
    return {
      listOfItems: [...this.listItems],
    };
  },
  methods: {
    tableChangeHandle(e) {
      const inputValue = e.currentTarget.value;

      this.listOfItems.push(inputValue);
      this.$emit("tableChange", this.listOfItems);
    },
  },
  watch: {
    listItems(newList) {
      this.listOfItems = [...newList];
    },
  },
  components: { TextField },
};
</script>
<style lang="scss">
.items-field {
  border: 1px solid rgba($c-accent, 0.5);
  border-radius: $radius;

  &__legend {
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
    padding: 12px 0 12px 18px;
    text-align: left;
  }
}
</style>