<template>
  <div>
    <div v-for="(widget, index) in list" class="mt-elem" :key="index">
      <!-- mt-textarea -->
      <widget-textarea :widget="widget.config" v-if="widget.type == 'mt-textarea'"></widget-textarea>

      <!-- mt-textinput -->
      <widget-text-input :widget="widget.config" v-if="widget.type == 'mt-textinput'"></widget-text-input>

      <!-- mt-checkbox -->
      <widget-checkbox :widget="widget.config" v-if="widget.type == 'mt-checkbox'"></widget-checkbox>

      <!-- mt-dropdown -->
      <widget-dropdown :widget="widget.config" v-if="widget.type == 'mt-dropdown'"></widget-dropdown>

      <!-- mt-container -->
      <template v-if="widget.type == 'mt-container'">
        <div :class="widget.type" :key="widget.config.id">
          {{ widget.config.placeholder }}

          <widgets :list="widget.children" v-if="widget.children.length"></widgets>
        </div>
      </template>

      <widgets :list="widget.children" v-if="widget.children.length && widget.type != 'mt-container'"></widgets>
    </div>
  </div>
</template>

<script>
import WidgetTextarea from '../WidgetTextarea/WidgetTextarea.vue';
import WidgetTextInput from '../WidgetTextInput/WidgetTextInput.vue';
import WidgetCheckbox from '../WidgetCheckbox/WidgetCheckbox.vue';
import WidgetDropdown from '../WidgetDropdown/WidgetDropdown.vue';

export default {
  name: 'widgets',

  components: {
    WidgetTextarea,
    WidgetTextInput,
    WidgetCheckbox,
    WidgetDropdown
  },

  props: ['list'],
};
</script>

<style>
.mt-elem {
  margin-bottom: 20px;
}

.mt-label {
  display: block;
  margin-bottom: 10px;
}

.mt-textarea,
.mt-textinput,
.mt-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #2c3e50;
  outline: none;
  border-radius: 5px;
}

.mt-container {
  background-color: #dadada;
  padding: 20px;
}

.mt-select {
  height: 35px;
}

.mt-required {
  color: red;
}
</style>
