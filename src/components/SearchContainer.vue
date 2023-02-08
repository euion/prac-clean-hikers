<template>
  <div class="flex justify-center">
    <form
      @submit.prevent="submitForm"
      class="bg-white rounded-xl max-w-4xl flex justify-between p-3"
    >
      <ul>
        <div class="w-25 pr-2">
          <select id="region" name="region" v-model="region">
            <option value="regionDefault" selected disabled>지역</option>
            <option value="설악산">설악산</option>
            <option value="wom">지리산</option>
            <option value="newspaper">Newspaper</option>
          </select>
        </div>
        <p class="text-xs text-gray-400">Your destination</p>
      </ul>
      <ul>
        <div class="w-25 pr-2">
          <select id="date" name="date" v-model="date">
            <option value="dateDefault" selected disabled>날짜</option>
            <option value="google">Google</option>
            <option value="wom">Word of mouth</option>
            <option value="newspaper">Newspaper</option>
          </select>
        </div>
        <p class="text-xs text-gray-400">When does it start?</p>
      </ul>
      <ul>
        <div class="w-25 pr-2">
          <select id="personnel" name="personnel" v-model="personnel">
            <option value="personnelDefault" selected disabled>인 원</option>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명</option>
            <option value="6">6명</option>
          </select>
        </div>
        <p class="text-xs text-gray-400">How many people?</p>
      </ul>

      <div>
        <a href="/search-mountain">
          <button class="bg-blue-700 py-3 px-6 text-white rounded-2xl w-25 ml-2">
            찾아보기
          </button></a
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      region: 'regionDefault',
      date: 'dateDefault',
      personnel: 'personnelDefault',
    };
  },
  methods: {
    submitForm() {
      console.log('referror:', this.region);
    },
  },
};
</script>