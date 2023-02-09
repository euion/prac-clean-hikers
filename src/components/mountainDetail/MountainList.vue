<template>
  <div>
    <div
      class="border border-b-lime-600 grid grid-cols-4 py-[20px] font-sans hover:bg-[#dee7cb] cursor-pointer"
      @click="hoverImg"
    >
      <b class="font-sans">{{ garbageList.name }}</b>
      <div>{{ garbageList.address }}</div>
      <div>{{ Number(garbageList.trash).toFixed(1) }}</div>
      <div>{{ garbageList.difficulty }}</div>
    </div>
    <div v-if="isModal == true" class="flex justify-center">
      <mountain-modal
        :isModal="isModal"
        :hoverImg="hoverImg"
        :garbageList="garbageList"
      />
    </div>
  </div>
</template>

<script>
import MountainModal from './MountainModal.vue';

export default {
  name: 'mountain-list',
  props: ['garbageList', 'hoverImg', 'isModal'],
  components: { MountainModal },
};
</script>
