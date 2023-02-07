<template>
  <div class="w-screen bg-[url('src/assets/img/main.png')]">
    <div class="py-40">
      <div class="flex justify-center">
        <div class="flex-col pt-20">
          <h1 class="text-6xl">다같이 줍자<down-outlined /></h1>
          <h1 class="text-6xl">#클린하이킹</h1>
          <p class="flex justify-center font-main py-5">
            클린하이커스는 ~한 서비스입니다.
          </p>
        </div>
      </div>

      <search-container />
    </div>
  </div>
</template>

<script>
import SearchContainer from '@/components/SearchContainer.vue';

export default {
  components: {
    SearchContainer,
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Gugi-Regular';
  src: url('/assets/font/Gugi-Regular.ttf') format('truetype');
}
</style>
