<template>
  <div class="w-[180px] h-[180px] m-[1%]">
    <img
      :src="mountain.image"
      @:click="hoverImg"
      class="cursor-pointer rounded-[20px] w-[180px] h-[180px] hover:ease-in"
    />
    <div
      v-if="this.isModal == true"
      class="absolute t w-[180px] h-[180px] rounded-[20px] hover:bg-[rgba(0, 0, 0, 0.4)]"
    >
      <p>{{ mountain.name }}</p>
      <br />
      <p>연간 쓰레기 처리량 {{ Number(mountain.trash).toFixed(1) }}톤</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mountain-modal',
  props: ['mountain'],

  methods: {
    data() {
      return {
        isModal: false,
      };
    },
    hoverImg() {
      this.isModal = !this.isModal;
      console.log(this.isModal);
    },
  },
};
</script>
