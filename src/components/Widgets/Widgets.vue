<template>
  <div>
    <div v-for="(widget, index) in list" class="mt-elem" :key="index">
      <widget-textarea :widget="widget.config" v-if="widget.type == 'mt-textarea'"></widget-textarea>
      <widget-text-input :widget="widget.config" v-if="widget.type == 'mt-textinput'"></widget-text-input>
      <widget-checkbox :widget="widget.config" v-if="widget.type == 'mt-checkbox'"></widget-checkbox>
      <widget-dropdown :widget="widget.config" v-if="widget.type == 'mt-dropdown'"></widget-dropdown>

      <template v-if="widget.type == 'mt-container'">
        <div :class="widget.type" :key="widget.config.id">
          <div class="mt-title">{{ widget.config.placeholder }}</div>          
          <div class="mt-content">
            <widgets :list="widget.children" v-if="widget.children.length"></widgets>
          </div>
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
  border: 1px solid #2c3e50;
  border-radius: 5px;
  overflow: hidden;
}

.mt-title {
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #2c3e50;
}

.mt-content {
  padding: 20px;
  background-color: #dadada;
}

.mt-select {
  height: 35px;
}

.mt-required {
  color: red;
}
</style>
