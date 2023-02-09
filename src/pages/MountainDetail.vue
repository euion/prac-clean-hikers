<template>
  <div>
    <div class="text-center">
      <div class="py-4">
        <h1 class="text-3xl font-sans font-bold py-5">
          가장 쓰레기가 많은 산들이에요
        </h1>
        <p v-if="isLoading">로딩중...</p>
        <p v-else-if="!isLoading && errData">
          {{ errData }}
        </p>
        <div class="flex justify-center" v-else>
          <mountain-top
            v-for="cardList in cardLists"
            :key="cardList.id"
            :mountain="cardList"
          ></mountain-top>
        </div>
      </div>

      <div class="py-4">
        <h1 class="text-3xl font-sans font-bold py-5">
          궁금한 산을 검색해보세요
        </h1>
        <div class="grid place-content-center">
          <div class="grid gap-1">
            <div
              class="font-sans grid grid-cols-4 gap-x-4 py-5 m-0 auto rounded-[5px] bg-[#89A550] text-white"
            >
              <b>산이름</b>
              <b>위치</b>
              <b>연간 쓰레기 처리량(톤)</b>
              <b>등산 난이도</b>
            </div>
            <div>
              <mountain-list
                v-for="garbageList in garbageLists"
                :key="garbageList.id"
                :garbageList="garbageList"
                :mountain="hoverImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MountainName from '@/components/mountainDetail/MountainName.vue';
import MountainTop from '@/components/mountainDetail/MountainTop.vue';
import MountainList from '@/components/mountainDetail/MountainList.vue';
import MountainModal from '@/components/mountainDetail/MountainModal.vue';

export default {
  name: 'mountain-detail',
  components: { MountainName, MountainTop, MountainList, MountainModal },

  data() {
    return {
      cardLists: [],
      garbageLists: [],
      isClicked: false,
      isLoading: false,
      errData: null, //초기값 오류 없음
    };
  },
  methods: {
    hoverImg() {
      this.isModal = !this.isModal;
      console.log(this.isModal);
    },
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
