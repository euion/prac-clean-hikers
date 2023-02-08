<template>
  <div class="flex justify-center">
    <form
      @submit.prevent="submitForm"
      class="bg-white rounded-3xl max-w-4xl flex justify-between p-3"
    >
      <ul>
        <div class="w-25 pr-2">
          <select id="region" name="region" v-model="region">
            <option value="regionDefault" selected disabled>지역</option>
            <option value="설악산">설악산</option>
            <option value="지리산">지리산</option>
            <option value="계룡산">계룡산</option>
            <option value="속리산">속리산</option>
            <option value="한라산">한라산</option>
            <option value="내장산">내장산</option>
            <option value="가야산">가야산</option>
            <option value="덕유산">덕유산</option>
            <option value="오대산">오대산</option>
            <option value="주왕산">주왕산</option>
            <option value="치악산">치악산</option>
            <option value="월악산">월악산</option>
          </select>
        </div>
        <p class="text-xs text-gray-400">Your destination</p>
      </ul>
      <ul>
        <div class="w-25 pr-2">
          <datepicker
            v-model="picked"
            :locale="locale"
            :weekStartsOn="0"
            :inputFormat="inputFormat"
            :clearable="true"
          />
        </div>
        <p class="text-xs text-gray-400">When does it start?</p>
      </ul>
      <ul>
        <div class="w-25 pr-2">
          <select id="personnel" name="personnel" v-model="personnel">
            <option value="personnelDefault" selected disabled>인 원</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <p class="text-xs text-gray-400">How many people?</p>
      </ul>

      <div>
        <!-- <a href="/search-mountain"> -->
        <button
          class="bg-blue-700 py-3 px-6 text-white rounded-2xl w-25 ml-2"
          @click="clickParams"
        >
          찾아보기
        </button>
        <!-- </a> -->
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';

export default {
  props: ['mountainValue'],
  emits: ['update:mountainValue'],

  components: { Datepicker },

  data() {
    return {
      region: 'regionDefault',
      date: 'dateDefault',
      personnel: 'personnelDefault',
    };
  },
  setup() {
    let picked = ref(new Date());
    let locale = ref(ko);
    let inputFormat = ref('yyyy-MM-dd');
    return {
      picked,
      locale,
      inputFormat,
    };
  },
  methods: {
    activate(option) {
      this.activateOption = option;
      this.$emit('update:modelValue', option);
    },
    submitForm() {
      console.log('region:', this.region);
      console.log('date :', this.picked);
      console.log('personnel', this.personnel);
    },
    clickParams() {
      this.$router.push({
        name: 'mountain-detail',
        query: {
          region: this.region,
          date: this.picked,
          personnel: this.personnel,
        },
      });
      console.log(this.personnel);
    },
  },
};
</script>
