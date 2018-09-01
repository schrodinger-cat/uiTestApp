<template>
  <div>
    <label :for="`id_checkbox_${widget.id}`" class="mt-label">
      {{ widget.placeholder }} 
      <sup class="mt-required" v-if="widget.required">
        *
      </sup>
    </label>

    <select 
      :id="`id_checkbox_${widget.id}`" 
      class="mt-select"
      v-model="val"
    >
      <option 
        v-for="(item, index) in widget.items"
        :key="index"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'widget-dropdown',

  props: ['widget'],

  computed: {
    val: {
      get() {
        return this.$store.state.widgetValues[this.widget.id];
      },
      set(value) {
        let params = {
          id: this.widget.id,
          value: value,
        };
        
        this.handleUpdateValue(params);
      },
    },

    getInitialValue() {
      return this.$store.state.widgetValues[this.widget.id];
    }
  },

  methods: {
    ...mapMutations({
      handleUpdateValue: 'updateWidgetValue'
    })
  },
};
</script>
