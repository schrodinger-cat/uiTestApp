<template>
  <div id="app" class="mt">
    <widgets :list="widgetsList"></widgets>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Widgets from './components/Widgets/Widgets.vue';

export default {
  name: 'app',

  components: {
    Widgets,
  },

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

  mounted() {
    //console.log(this.$el.outerHTML);
    console.log(this.$options);
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

.output {
  padding: 20px;
  background-color: #dadada;
  border-radius: 5px;
}
</style>
