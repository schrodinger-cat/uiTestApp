<template>
  <div id="app" class="mt">
    <div v-for="widget in widgetsList" class="mt-elem" :key="widget.config.id">
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
          :value="widget.config.value"
          :key="widget.config.id"
        >
      </template>

      <!-- mt-checkbox -->
      <template v-if="widget.type == 'mt-checkbox'">
        <label :key="widget.config.id">
          <input type="checkbox" :checked="widget.config.checked">
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

          <select :id="`id_checkbox_${widget.config.id}`" class="mt-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
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
    </div>

    <button>Отправить</button>
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

  .mt-textarea, .mt-textinput, .mt-select {
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
    color: red
  }
</style>


