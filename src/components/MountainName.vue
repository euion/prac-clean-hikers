<template>
  <div>
    <h3>
      {{ leaveDate }}, {{ region }}으로 여행가요! 선착순 {{ personnel }}명
    </h3>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'mountain-name',
  components: {
    dayjs,
  },

  props: ['region', 'date', 'personnel'],
  data() {
    return {
      leaveDate: dayjs(this.$route.query.date).format('YY년 MM월 DD일'),
    };
  },
};
</script>
