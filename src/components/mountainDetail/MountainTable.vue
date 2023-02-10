<template>
  <div>
    <div
      class="border border-b-lime-600 grid grid-cols-4 py-[20px] font-sans hover:bg-[#dee7cb] cursor-pointer"
      @click="mountain"
    >
      <b class="font-sans">{{ mountainItem.name }}</b>
      <div>{{ mountainItem.address }}</div>
      <div>{{ Number(mountainItem.trash).toFixed(1) }}</div>
      <div>{{ mountainItem.difficulty }}</div>
    </div>
  </div>
</template>

<script>
import MountainModal from './MountainModal.vue';

export default {
  name: 'mountain-table',
  props: ['mountainItem', 'mountain'],
  components: { MountainModal },

  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    closeModal() {
      console.log(garbageList);
    },
  },
};
</script>
