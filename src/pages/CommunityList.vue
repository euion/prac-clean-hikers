<template>
  <div>
    <h1 class="text-3xl font-sans font-bold py-5 text-center">
      커뮤니티를 확인해보세요
    </h1>
    <div class="flex flex-row justify-center">
      <div class="w-3/5">
        <a href="/"
          ><button
            class="bg-[#80a866] py-2 px-5 border rounded hover:bg-[#5f8d40] text-gray-100 hover:font-bold"
          >
            목록
          </button></a
        >
        <post-list-card
          v-for="postDataItem in postDataList"
          @click="clickPost(postDataItem)"
          :key="postDataItem.id"
          :postDataItem="postDataItem"
        >
        </post-list-card>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityCreate from '@/pages/CommunityCreate.vue';
import PostListCard from '@/components/community/PostListCard.vue';

export default {
  name: 'community-list',
  components: { CommunityCreate, PostListCard },

  data() {
    return {
      isLoading: false,
      errData: null,
      postDataList: [],
      postDataItem: [],
      lockNumber: '',
    };
  },

  methods: {
    loadCommunityPost() {
      this.isLoading = true;
      this.errData = null;
      fetch('http://localhost:5173/data/community-posting.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          this.postDataList = data.savedResources;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.errData =
            '오류가 발생하였습니다. 다시 새로고침을 시도하여 주십시오';
        });
    },
    clickPost(postDataItem) {
      this.postDataItem = postDataItem;
      console.log(this.postDataItem);
      this.$router.push(
        {
          name: 'community-detail',
          params: {
            id: postDataItem.id,
          },
          query: {
            title: postDataItem.title,
            nickName: postDataItem.nickname,
            description: postDataItem.description,
            personnel: postDataItem.personnel,
            leaveDate: postDataItem.leaveDate,
            leaveMountain: postDataItem.leaveMountain,
            lockNumber: postDataItem.lockNumber,
          },
        },
        console.log(postDataItem),
      );
    },
  },
  mounted() {
    this.loadCommunityPost();
  },
};
</script>
