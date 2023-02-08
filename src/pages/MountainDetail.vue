<template>
  <div>
    <h1 class="text-3xl font-sans font-bold">가장 쓰레기가 많은 산들이에요</h1>
    <p v-if="isLoading">로딩중...</p>
    <p v-else-if="!isLoading && errData">
      {{ errData }}
    </p>
    <mountain-modal
      v-else
      v-for="cardList in cardLists"
      :key="cardList.id"
      :region="cardList.region"
    ></mountain-modal>
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
  data() {
    return {
      cardLists: [],
      isLoading: false,
      errData: null, //초기값 오류 없음
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.errData = null;
      let url = 'mockdata.json';
      fetch('http://localhost:5173/data/mockdata.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          this.isLoading = false;
          const cardLists = data.data;
          this.cardLists = cardLists;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.errData =
            '오류가 발생하였습니다. 다시 새로고침을 시도하여 주십시오';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>
