<template>
  <div>
    <label :for="`id_${widget.id}`" class="mt-label">
      {{ widget.placeholder }} 
      <sup class="mt-required" v-if="widget.required">
        *
      </sup>
    </label>

    <input 
      type="text"
      class="mt-textinput"
      :id="`id_${widget.id}`"
      :placeholder="widget.placeholder"
      :required="widget.required"
      v-model="val"
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'widget-textinput',

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
