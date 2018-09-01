<template>
  <div>
    <label :for="`id_${widget.id}`" class="mt-label">
      {{ widget.placeholder }} 
      <sup class="mt-required" v-if="widget.required">
        *
      </sup>
    </label>

    <textarea 
      class="mt-textarea"
      :id="`id_${widget.id}`"
      :placeholder="widget.placeholder"
      :required="widget.required"
      :rows="widget.rows"
      v-model="val"
    ></textarea>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'widget-textarea',

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

