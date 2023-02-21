<template>
  <div>
    <div class="p-10 font-sans py-10 flex justify-center">
      <div class="w-3/5 flex-row justify-center">
        <div class="flex justify-between">
          <a href="/community"
            ><button
              class="bg-[#9acf77] py-2 px-5 border rounded hover:bg-[#5f8d40] text-gray-100 hover:font-bold my-5"
            >
              목록
            </button>
          </a>
          <button
            class="bg-blue-300 py-2 px-5 border rounded hover:bg-blue-500 text-gray-100 hover:font-bold my-5"
            @click="updatePost"
          >
            수정
          </button>
        </div>

        <div class="border rounded float-left w-full p-10 h-full flex flex-col">
          <div>
            <p class="font-bold">{{ this.nickname }}</p>
            <h1 class="text-3xl font-bold py-2">
              {{ this.title }}
            </h1>

            <ul class="flex justify-between py-5">
              <li class="flex pb-1">
                방문할 산 :
                <p class="font-bold">{{ this.leaveMountain }}</p>
              </li>
              <li class="flex pb-1">
                <p>모집 인원:</p>
                <p class="font-bold">{{ this.personnel }}</p>
              </li>
              <li class="flex pb-1">
                <p>출발 일자:</p>
                <p class="font-bold">{{ this.leaveDate }}</p>
              </li>
            </ul>
          </div>

          <div class="pt-10">
            <p class="py-2">{{ this.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10 font-sans py-10 flex justify-center">
      <div class="w-3/5">
        <comment />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/community/Comment.vue';
import dayjs from 'dayjs';

export default {
  name: 'community-detail',
  components: {
    Comment,
  },
  data() {
    return {
      title: this.$route.query.title,
      nickname: this.$route.query.nickname,
      description: this.$route.query.description,
      personnel: this.$route.query.personnel,
      leaveDate: dayjs(this.$route.query.leaveDate).format('YYYY-MM-DD'),
      leaveMountain: this.$route.query.leaveMountain,
      lockNumber: this.$route.query.lockNumber,
    };
  },
  methods: {
    updatePost() {
      this.$router.push({
        name: 'community-update',
        params: {
          id: this.$route.params.id,
        },
        query: {
          title: this.title,
          nickname: this.nickname,
          description: this.description,
          personnel: this.personnel,
          leaveDate: this.leaveDate,
          leaveMountain: this.leaveMountain,
          lockNumber: this.lockNumber,
        },
      });
    },
  },
};
</script>
