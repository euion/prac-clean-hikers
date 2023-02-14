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
          국립공원에 관한 세부 데이터에요
        </h1>
        <div class="flex justify-center">
          <div class="w-4/6">
            <mountain-table :mountainList="mountainList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MountainTopCard from '@/components/mountainDetail/MountainTopCard.vue';
import MountainTable from '@/components/mountainDetail/MountainTable.vue';
import MountainSearchBar from '@/components/mountainDetail/MountainSearchBar.vue';

export default {
  name: 'mountain-detail',
  components: {
    MountainTopCard,
    MountainTable,
    MountainSearchBar,
  },

  data() {
    return {
      mountainCardList: [],
      mountainList: [],
      isLoading: false,
      errData: null,
    };
  },
  methods: {
    onSelectedMountainList(item) {
      if (item !== this.mountainItem) {
        this.mountainItem = item;
        this.isModal = true;
      } else if (item === this.mountainItem) {
        this.isModal = true;
      }
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
          this.mountainCardList = data.data;
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
          this.mountainList = data.data;
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
