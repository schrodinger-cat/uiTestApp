<template>
  <div id="app">
    <template v-for="widget in widgetsList">
      <!-- mt-textarea -->
      <template v-if="widget.type == 'mt-textarea'">
        <textarea 
          :placeholder="widget.config.placeholder"
          :required="widget.config.required"
          :rows="widget.config.rows"
          :key="widget.config.id"
        ></textarea>
      </template>

      <!-- mt-textinput -->
      <template v-if="widget.type == 'mt-textinput'">
        <input 
          type="text"
          :placeholder="widget.config.placeholder"
          :required="widget.config.required"
          :value="widget.config.value"
          :key="widget.config.id"
        >
      </template>

      <!-- mt-checkbox -->
      <template v-if="widget.type == 'mt-checkbox'">
        <label :key="widget.config.id">
          <input type="checkbox" :checked="widget.config.checked">
          {{ widget.config.value }}
        </label>
      </template>

      <!-- mt-dropdown -->
      <template v-if="widget.type == 'mt-dropdown'">
        <div :key="widget.config.id">
          <label for="`id_checkbox_${widget.config.id}`">{{ widget.config.placeholder }}</label>
          <select id="`id_checkbox_${widget.config.id}`">
            <option 
              v-for="(item, index) in widget.config.items"
              :key="index"
              :value="item.value"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </template>

      <!-- mt-container -->
      <template v-if="widget.type == 'mt-container'">
        <div :class="widget.type" :key="widget.config.id">
          {{ widget.config.placeholder }}
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',

  data: () => {
    return {
      form: [],
    }
  },

  computed: {
    ...mapGetters({
      widgetsList: 'getWidgetsList',
    }),
  },
};
</script>
