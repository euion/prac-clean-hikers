<template>
  <div class="w-screen bg-[url('src/assets/img/main.png')]">
    <div class="py-48">
      <div class="flex justify-center">
        <div class="flex-col pt-20">
          <h1 class="text-6xl font-main">다같이 줍자<down-outlined /></h1>
          <h1 class="text-6xl font-main">#클린하이킹</h1>
          <p class="flex justify-center py-5 font-sans font-bold">
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
