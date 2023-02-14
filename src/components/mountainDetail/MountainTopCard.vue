<template>
  <div
    class="drop-shadow-lg w-[180px] h-[180px] m-[10px] relative easeout duration-100"
  >
    <img
      :src="mountainCard.image"
      @:click="onclickImg"
      class="cursor-pointer rounded-[20px] w-[180px] h-[180px] hover:ease-in"
    />
    <div
      v-if="this.isModal"
      @:click="onclickImg"
      class="absolute top-0 left-0 w-[100%] h-[100%] rounded-[20px] bg-opacity-50 bg-gray-800"
    >
      <div class="text-white opacity-100 py-5">
        <p>{{ mountainCard.name }}</p>

        <br />
        <p>
          연간 쓰레기 처리량 : <br />{{
            Number(mountainCard.trash).toFixed(1)
          }}톤
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mountain-top-card',
  props: ['mountainCard'],
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    onclickImg() {
      this.isModal = !this.isModal;
      console.log(this.isModal);
    },
  },
};
</script>
