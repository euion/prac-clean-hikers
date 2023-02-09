<template>
  <div>
    <div
      class="border border-b-lime-600 grid grid-cols-4 py-[20px] font-sans hover:bg-[#dee7cb] cursor-pointer"
      @click="mountain"
    >
      <b class="font-sans">{{ garbageList.name }}</b>
      <div>{{ garbageList.address }}</div>
      <div>{{ Number(garbageList.trash).toFixed(1) }}</div>
      <div>{{ garbageList.difficulty }}</div>
    </div>
  </div>
</template>

<script>
import MountainModal from './MountainModal.vue';

export default {
  name: 'mountain-list',
  props: ['garbageList', 'mountain'],
  components: { MountainModal },

  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    // hoverImg() {
    //   this.isModal = !this.isModal;
    //   console.log(this.isModal);
    // },
    closeModal() {
      console.log(garbageList);
    },
  },
};
</script>
