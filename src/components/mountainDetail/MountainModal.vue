<template>
  <div class="fixed text-sm drop-shadow-xl top-[20%] bg-white p-10 rounded-2xl">
    <div class="text-left">
      <b>위치</b> {{ garbageList.name }}
      <br />
      <b>등산 난이도 </b> {{ garbageList.difficulty }}
      <br />
      <b>연간 쓰레기 처리량 </b> {{ Number(garbageList.trash).toFixed(1) }}톤
    </div>
    <div>
      <img
        :src="garbageList.image"
        class="w-[180px] h-[100px] border rounded-2xl drop-shadow-xl mt-[20px]"
      />
    </div>
    <button
      class="bg-lime-600 text-white px-[20px] py-[10px] rounded mt-5"
      @click="hoverImg()"
    >
      함께하기
    </button>
  </div>
</template>

<script>
export default {
  name: 'mountain-modal',
  props: ['isModal', 'garbageList', 'hoverImg'],
};
</script>
