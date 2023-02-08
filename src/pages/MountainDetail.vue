<template>
  <div>
    <h1 class="text-3xl font-sans font-bold">가장 쓰레기가 많은 산들이에요</h1>
    <mountain-modal />
    <p>{{ $route.query.region }}</p>
    <h1 class="text-3xl font-sans font-bold">궁금한 산을 검색해보세요</h1>
    <mountain-name
      :region="$route.query.region"
      :date="$route.query.date"
      :personnel="$route.query.personnel"
    />
  </div>
</template>

<script>
import MountainName from '@/components/MountainName.vue';
import MountainModal from '@/components/MountainModal.vue';

export default {
  name: 'mountain-detail',
  components: { MountainName, MountainModal },
};
</script>
