<template>
  <div class="flex justify-center">
    <div
      @submit.prevent="submitForm"
      class="bg-white rounded-3xl max-w-4xl flex justify-between p-3"
    >
      <ul>
        <div class="w-25 pr-2">
          <select id="region" name="region" v-model="regionSelected">
            <option value="regionDefault" selected disabled>지역</option>
            <option
              v-for="region in regions"
              :value="regions.value"
              :key="region.id"
            >
              <p>{{ region.text }}</p>
            </option>
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
          <select id="personnel" name="personnel" v-model="personnelSelected">
            <option value="personnelDefault" selected disabled>인 원</option>
            <option
              v-for="personnel in personnels"
              :value="personnels.value"
              :key="personnel.id"
            >
              <p>{{ personnel.text }}명</p>
            </option>
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
    </div>
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
      regions: [
        { text: '설악산', value: '설악산' },
        { text: '지리산', value: '지리산' },
        { text: '계룡산', value: '계룡산' },
        { text: '속리산', value: '속리산' },
        { text: '한라산', value: '한라산' },
        { text: '내장산', value: '내장산' },
        { text: '덕유산', value: '덕유산' },
        { text: '오대산', value: '오대산' },
        { text: '주왕산', value: '주왕산' },
        { text: '치악산', value: '치악산' },
        { text: '월악산', value: '월악산' },
      ],
      regionSelected: 'regionDefault',
      dateSelected: 'dateDefault',
      personnels: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 },
        { text: '7', value: 7 },
        { text: '8', value: 8 },
      ],
      personnelSelected: 'personnelDefault',
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
    clickParams() {
      this.$router.push({
        name: 'mountain-detail',
        query: {
          region: this.region.text,
          date: this.picked,
          personnel: this.personnel.text,
        },
      });
      console.log(this.personnels);
    },
  },
};
</script>
