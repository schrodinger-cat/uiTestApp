<template>
  <div id="app" class="mt">
    <widgets :list="widgetsList"></widgets>

    <button @click.prevent="generateHTML">Сгенерировать html</button>
    <pre class="mt-html">{{ form }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Widgets from './components/Widgets/Widgets.vue';

export default {
  name: 'app',

  data: () => {
    return {
      form: null
    }
  },

  components: {
    Widgets,
  },

  computed: {
    ...mapGetters({
      widgetsList: 'getWidgetsList',
      widgetsValues: 'getWidgetsValues'
    }),
  },

  methods: {
    generateHTML() {
      this.form = this.$el.outerHTML;
    }
  },
};
</script>


<style>
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

.mt-html {
  overflow-x: scroll;
  font-size: 10px;
  background-color: #e0e0e0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
}

.output {
  padding: 20px;
  background-color: #dadada;
  border-radius: 5px;
}
</style>
