<template>
  <div>
    <label :key="widget.id">
      <input 
        type="checkbox"
        v-model="val"
      >
      {{ widget.value }} 
      <sup class="mt-required" v-if="widget.required">
        *
      </sup>
    </label>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'widget-checkbox',

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
  },

  methods: {
    ...mapMutations({
      handleUpdateValue: 'updateWidgetValue'
    })
  },
};
</script>
