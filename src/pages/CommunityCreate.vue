<template>
  <div>
    <create-form :inputTitleData="leaveData" />
  </div>
</template>

<script>
import CreateForm from '@/components/community/CreateForm.vue';
import dayjs from 'dayjs';

export default {
  name: 'community-create',
  // props: ['region', 'date', 'personnel'],
  components: {
    CreateForm,
  },

  data() {
    return {
      selectedTab: 'stored-resources',
      leaveData: {
        leaveDate: dayjs(this.$route.query.date).format('YY년 MM월 DD일'),
        leaveMountain: this.$route.query.region,
        leavePersonnel: this.$route.query.personnel,
      },

      savedResources: [
        {
          id: '0',
          title: '덕유산으로 놀러가요',
          description: '덕유산 진짜 쓰레기 많다하던데.. 청소하러갑시당',
          nickname: '콩콩',
        },
        {
          id: '1',
          title: '한라산으로 청소시급합니다!!',
          description: '한라산 진짜 쓰레기 많다하던데.. 청소하러갑시당',
          nickname: '농담곰',
        },
        {
          id: '0',
          title: '오대산으로 놀러가요',
          description: '오대산 깨끗한 자연을 누려봅시다',
          nickname: '농담고양이',
        },
      ],
    };
  },
  // provide() {
  //   return {
  //     // leaveDate: computed(() => this.routedLeaveDate),
  //     // leaveMountain: computed(() => this.routedMountain),
  //     // leavePersonnel: computed(() => this.routedPersonnel),
  //     createResource: this.createResource,
  //     deleteResource: this.deleteResource,
  //   };
  // },
  // computed: {
  //   storedResButtonMode() {
  //     return this.selectedTab === 'stored-resources' ? null : 'flat';
  //   },
  //   createResButtonMode() {
  //     return this.selectedTab === 'create-resources' ? null : 'flat';
  //   },
  // },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    createResource(title, description, nickname) {
      const newResource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        nickname: nickname,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resId) {
      const resIndex = this.savedResources.findIndex((res) => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
    // updateResources(title, description, nickname){

    // }
  },
};
</script>
