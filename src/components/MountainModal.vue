<template>
  <div>
    <img src="@/assets/img/trash1.png" />
  </div>
</template>

<script>
export default {
  name: 'mountain-modal',
  data() {
    return {
      cardList: [],
      isLoading: false,
      errData: null, //초기값 오류 없음
    };
  },
  watch: {
    cardList(myValue, oldValue) {
      console.log();
    },
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.errData = null;
      fetch('./');
    },
  },
};
</script>
