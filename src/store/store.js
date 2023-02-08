import Vue from 'vue';
import Vuex from 'vuex';

Vue.useAttrs(Vuex);

export const store = new Vuex.Store({
  data: [
    {
      id: 0,
      region: '설악산',
    },
    {
      id: 1,
      region: '속리산',
    },
  ],
});
