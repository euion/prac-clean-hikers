<template>
  <div>
    <div class="text-center">
      <h1 class="text-3xl font-sans font-bold">
        가장 쓰레기가 많은 산들이에요
      </h1>
      <p v-if="isLoading">로딩중...</p>
      <p v-else-if="!isLoading && errData">
        {{ errData }}
      </p>
      <div class="flex justify-center" v-else>
        <mountain-modal
          v-for="cardList in cardLists"
          :key="cardList.id"
          :mountain="cardList"
        ></mountain-modal>
      </div>

      <p>{{ $route.query.region }}</p>
      <h1 class="text-3xl font-sans font-bold">궁금한 산을 검색해보세요</h1>
      <p v-if="isLoading">로딩중...</p>
      <p v-else-if="!isLoading && errData">
        {{ errData }}
      </p>
      <div class="flex justify-center" v-else>
        <mountain-name
          :region="$route.query.region"
          :date="$route.query.date"
          :personnel="$route.query.personnel"
          :garbageLists="garbageLists"
        />
      </div>
    </div>
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
      garbageLists: [],
      isLoading: false,
      errData: null, //초기값 오류 없음
    };
  },
  methods: {
    loadMostGarbage() {
      this.isLoading = true;
      this.errData = null;
      fetch('http://localhost:5173/data/most-garbage.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
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
    loadMountainDetail() {
      this.isLoading = true;
      this.errData = null;
      fetch('http://localhost:5173/data/mountain-garbage.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const garbageLists = data.data;
          this.garbageLists = garbageLists;
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
    this.loadMostGarbage();
    this.loadMountainDetail();
  },
};
</script>
