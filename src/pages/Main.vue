<template>
  <div>
    <div class="w-screen bg-[url('src/assets/img/main.png')] overflow-none">
      <div class="pt-24 pb-72">
        <div class="flex justify-center">
          <div class="flex-col pt-20 max-sm:py-24">
            <h1 class="text-3xl font-main max-sm:text-1xl text-gray-600">
              다같이 줍자
            </h1>
            <h1 class="text-7xl font-main max-sm:text-5xl">#클린하이킹</h1>
            <p
              class="flex justify-center py-5 font-sans font-bold max-sm:text-xs"
            >
              클린하이커스는 ~한 서비스입니다.
            </p>
          </div>
        </div>
        <search-container />
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script>
import SearchContainer from '@/components/main/SearchContainer.vue';
import MainFooter from '@/common/footer/MainFooter.vue';

export default {
  components: {
    SearchContainer,
    MainFooter,
  },
};
</script>
