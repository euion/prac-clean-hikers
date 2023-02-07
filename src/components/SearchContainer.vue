<template>
  <div class="flex justify-center">
    <base-card
      v-if="inputIsInvaild"
      title="Invalid Input"
      @submit.prevent="submitData"
      class="bg-white rounded-2xl w-4/5 max-w-3xl flex justify-between p-3"
    >
      <ul>
        <li class="flex justify-between w-25">
          <label>지역</label>
          <img src="@/assets/icon/chevron_forward.png" />
        </li>
        <template>
          <p>날짜를 입력하세요</p>
        </template>
        <p class="text-xs text-gray-400">Your destination</p>
      </ul>
      <ul>
        <li class="flex justify-between w-25">
          <p>날짜</p>
          <img src="@/assets/icon/chevron_forward.png" />
        </li>
        <p class="text-xs text-gray-400">When does it start?</p>
      </ul>
      <ul>
        <li class="flex justify-between w-25">
          <p>인원</p>
          <img src="@/assets/icon/chevron_forward.png" />
        </li>
        <p class="text-xs text-gray-400">How many people?</p>
      </ul>

      <div>
        <a href="/search-mountain"> <button>찾아보기</button></a>
      </div>
    </base-card>
  </div>
</template>
<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvaild: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
    },
  },
};
</script>
