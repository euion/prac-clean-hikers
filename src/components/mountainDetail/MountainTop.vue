<template>
  <div
    class="drop-shadow-lg w-[180px] h-[180px] m-[10px] relative easeout duration-100"
  >
    <img
      :src="mountain.image"
      @:click="hoverImg"
      class="cursor-pointer rounded-[20px] w-[180px] h-[180px] hover:ease-in"
    />
    <div
      v-if="this.isModal === true"
      @:click="hoverImg"
      class="absolute top-0 left-0 w-[180px] h-[180px] rounded-[20px] bg-opacity-50 bg-gray-800"
    >
      <div class="text-white opacity-100 py-5">
        <p>{{ mountain.name }}</p>

        <br />
        <p>
          연간 쓰레기 처리량 <br />{{ Number(mountain.trash).toFixed(1) }}톤
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mountain-top',
  props: ['mountain'],
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    hoverImg() {
      this.isModal = !this.isModal;
      console.log(this.isModal);
    },
  },
};
</script>
