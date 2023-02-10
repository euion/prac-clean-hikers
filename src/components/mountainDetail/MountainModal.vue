<template>
  <div
    class="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-10 text-center text-m drop-shadow-xl"
  >
    <div class="top-[20%] bg-white p-10 rounded-2xl">
      <div class="text-left">
        <b>위치</b> {{ mountainItem.name }}
        <br />
        <b>등산 난이도 </b> {{ mountainItem.difficulty }}
        <br />
        <b>연간 쓰레기 처리량 </b> {{ Number(mountainItem.trash).toFixed(1) }}톤
      </div>
      <div>
        <img
          :src="mountainItem.image"
          class="w-[180px] h-[100px] border rounded-2xl drop-shadow-xl mt-[20px]"
        />
      </div>
      <button
        class="bg-lime-600 text-white px-[20px] py-[10px] rounded mt-5"
        @click="onModalControl()"
      >
        닫기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mountain-modal',
  props: ['mountainItem', 'onModalControl'],
};
</script>
