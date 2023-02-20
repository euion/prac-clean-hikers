<template>
  <div>
    <h1 class="text-3xl font-sans font-bold py-5 text-center">
      커뮤니티를 확인해보세요
    </h1>
    <div class="flex flex-row justify-center">
      <div class="w-3/5">
        <a href="/community-create" class="mx-2 flex justify-end"
          ><button
            class="bg-red-300 py-2 px-5 border rounded hover:bg-red-500 text-gray-100 hover:font-bold"
          >
            글쓰기
          </button></a
        >
        <post-list-card
          v-for="postDataItem in postDataList"
          @deleteResource="removeResource"
          @readPost="clickPost"
          :key="postDataItem.id"
          :lockNumber="postDataItem.lockNumber"
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
    removeResource(id, lockNumber) {
      console.log('삭제');
      const resIndex = this.postDataList.findIndex((res) => res.id === id);
      this.lockNumber = lockNumber;
      console.log(lockNumber);
      const deleteCheck = prompt(
        '삭제하시려면 게시물 비밀번호를 입력하여 주십시오',
      );
      if (lockNumber == deleteCheck) {
        if (confirm('삭제되었습니다.')) {
          this.postDataList.splice(resIndex, 1);
        }
        console.log(lockNumber);
      } else {
        alert('틀린 비밀번호입니다.');
        console.log(lockNumber);
        console.log(deleteCheck);
      }
      console.log(this.title);
    },
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
