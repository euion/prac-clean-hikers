<template>
  <div>
    <h1>커뮤니티 페이지 입니다.</h1>
    <post-list-card
      v-for="postDataItem in postDataList"
      @click="clickPost(postDataItem)"
      :key="postDataItem.id"
      :postDataItem="postDataItem"
    >
    </post-list-card>
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
