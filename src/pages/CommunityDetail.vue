<template>
  <div class="p-10 font-sans py-10 flex justify-center">
    <div class="w-3/5 flex-row justify-center">
      <a href="/community"
        ><button
          class="bg-[#9acf77] py-2 px-5 border rounded hover:bg-[#5f8d40] text-gray-100 hover:font-bold my-5"
        >
          목록
        </button></a
      >
      <div class="border rounded float-left w-full p-10">
        <div class="flex justify-end">
          <button
            class="bg-blue-300 py-2 px-5 border rounded hover:bg-blue-500 text-gray-100 mx-2 hover:font-bold"
            @click="updatePost"
          >
            수정
          </button>
        </div>
        <p class="font-bold">{{ this.nickName }}</p>
        <h1 class="text-3xl font-bold py-2">
          {{ this.title }}
        </h1>

        <ul class="flex justify-between">
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
            <p class="font-bold">{{ this.leaveDate || yyyy }}</p>
          </li>
        </ul>
        <div class="float-right"></div>
        <p class="py-2">{{ this.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'community-detail',
  data() {
    return {
      title: this.$route.query.title,
      nickName: this.$route.query.nickName,
      description: this.$route.query.description,
      personnel: this.$route.query.personnel,
      leaveDate: this.$route.query.leaveDate,
      leaveMountain: this.$route.query.leaveMountain,
      lockNumber: this.$route.query.lockNumber,
    };
  },
  methods: {
    updatePost() {
      this.$router.push(
        {
          name: 'community-update',
          params: {
            id: this.$route.params.id,
          },
          query: {
            title: this.$route.query.title,
            nickName: this.$route.query.nickName,
            description: this.$route.query.description,
            personnel: this.$route.query.personnel,
            leaveDate: this.$route.query.leaveDate,
            leaveMountain: this.$route.query.leaveMountain,
            lockNumber: this.$route.query.lockNumber,
          },
        },
        console.log(this.$route.params.id),
      );
    },
  },
};
</script>
