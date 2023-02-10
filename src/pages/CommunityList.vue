<template>
  <div>
    <h1>커뮤니티 페이지 입니다.</h1>
    <community-detail
      :routedRegion="this.routedRegion"
      :routedLeaveDate="this.routedLeaveDate"
      :routedPersonnel="this.routedPersonnel"
    />
  </div>
</template>

<script>
import CommunityDetail from '@/components/community/CommunityDetail.vue';
import dayjs from 'dayjs';

export default {
  name: 'community-list',
  components: { CommunityDetail },
  props: ['region', 'date', 'personnel'],

  data() {
    return {
      routedLeaveDate: dayjs(this.$route.query.date).format('YY년 MM월 DD일'),
      routedRegion: this.$route.query.region,
      routedPersonnel: this.$route.query.personnel,
    };
  },
};
</script>
