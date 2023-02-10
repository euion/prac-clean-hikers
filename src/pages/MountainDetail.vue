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
          <mountain-top-card
            v-for="mountainCard in mountainCardList"
            :key="mountainCard.id"
            :mountainCard="mountainCard"
          ></mountain-top-card>
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
              <mountain-table
                v-for="mountainItem in mountainList"
                :key="mountainItem.id"
                :mountainItem="mountainItem"
                @click="onSelectedMountainList(mountainItem)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="this.isModal" class="flex justify-center">
    <mountain-modal
      v-model:onModalControl="onModalControl"
      :mountainItem="mountainItem"
    />
  </div>
</template>

<script>
import MountainTopCard from '@/components/mountainDetail/MountainTopCard.vue';
import MountainTable from '@/components/mountainDetail/MountainTable.vue';
import MountainModal from '@/components/mountainDetail/MountainModal.vue';
import MountainSearchBar from '@/components/mountainDetail/MountainSearchBar.vue';

export default {
  name: 'mountain-detail',
  components: {
    MountainTopCard,
    MountainTable,
    MountainModal,
    MountainSearchBar,
  },

  data() {
    return {
      mountainCardList: [],
      mountainList: [],
      mountainItem: {},
      search: '', //검색 구현 중입니다
      isLoading: false,
      errData: null, //초기값 오류 없음
      isModal: false,
    };
  },
  methods: {
    onSelectedMountainList(item) {
      // console.log(item);
      if (item !== this.mountainItem) {
        // console.log(this.isModal);
        this.mountainItem = item;
        this.isModal = true;
      } else if (item === this.mountainItem) {
        this.isModal = true;
      }
    },
    onModalControl() {
      this.isModal = !this.isModal;
    },
    loadMostGarbageMountain() {
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
          const mountainCardList = data.data;
          this.mountainCardList = mountainCardList;
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
          const mountainList = data.data;
          this.mountainList = mountainList;
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
    this.loadMostGarbageMountain();
    this.loadMountainDetail();
  },
};
</script>
