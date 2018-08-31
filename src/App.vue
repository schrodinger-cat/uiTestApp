<template>
  <div id="app" class="mt">
    <div v-for="(widget, index) in widgetsList" class="mt-elem" :key="widget.config.id">
      <!-- mt-textarea -->
      <template v-if="widget.type == 'mt-textarea'">
        <label :for="`id_${widget.config.id}`" class="mt-label">
          {{ widget.config.placeholder }} 
          <sup class="mt-required" v-if="widget.config.required">
            *
          </sup>
        </label>

        <textarea 
          class="mt-textarea"
          :id="`id_${widget.config.id}`"
          :placeholder="widget.config.placeholder"
          :required="widget.config.required"
          :rows="widget.config.rows"
          v-model="form[index].config.value"
        ></textarea>
      </template>

      <!-- mt-textinput -->
      <template v-if="widget.type == 'mt-textinput'">
        <label :for="`id_${widget.config.id}`" class="mt-label">
          {{ widget.config.placeholder }} 
          <sup class="mt-required" v-if="widget.config.required">
            *
          </sup>
        </label>

        <input 
          type="text"
          class="mt-textinput"
          :id="`id_${widget.config.id}`"
          :placeholder="widget.config.placeholder"
          :required="widget.config.required"
          :key="widget.config.id"
          v-model="form[index].config.value"
        >
      </template>

      <!-- mt-checkbox -->
      <template v-if="widget.type == 'mt-checkbox'">
        <label :key="widget.config.id">
          <input 
            type="checkbox"
            v-model="form[index].config.checked"
          >
          {{ widget.config.value }} 
          <sup class="mt-required" v-if="widget.config.required">
            *
          </sup>
        </label>
      </template>

      <!-- mt-dropdown -->
      <template v-if="widget.type == 'mt-dropdown'">
        <div :key="widget.config.id">
          <label :for="`id_checkbox_${widget.config.id}`" class="mt-label">
            {{ widget.config.placeholder }} 
            <sup class="mt-required" v-if="widget.config.required">
              *
            </sup>
          </label>

          <select 
            :id="`id_checkbox_${widget.config.id}`" 
            class="mt-select"
            v-model="form[index].config.value"
          >
            <option 
              v-for="(item, index) in widget.config.items"
              :key="index"
              :value="item"
            >
              {{ item }}
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
    </div>

    Данные для отправки:
    <pre class="output">{{ form }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',

  data: () => {
    return {
      form: [],
    };
  },

  computed: {
    ...mapGetters({
      widgetsList: 'getWidgetsList',
    }),
  },

  beforeMount() {
    this.form = this.widgetsList;
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}

.mt {
  width: 900px;
  margin: auto;
  padding: 40px;
}

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

.mt-select {
  height: 35px;
}

.mt-required {
  color: red;
}

.output {
  padding: 20px;
  background-color: #dadada;
  border-radius: 5px;
}
</style>


