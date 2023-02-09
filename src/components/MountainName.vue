<template>
  <div v-for="garbageList in garbageLists" :key="garbageList.id">
    <p>{{ garbageList.name }}</p>
    <!-- <h3>
      {{ leaveDate }}, {{ region }}으로 여행가요! 선착순 {{ personnel }}명
    </h3> -->
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'mountain-name',
  components: {
    dayjs,
  },

  props: ['region', 'date', 'personnel', 'garbageLists'],
  data() {
    return {
      leaveDate: dayjs(this.$route.query.date).format('YY년 MM월 DD일'),
    };
  },
};
</script>
