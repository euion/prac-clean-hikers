<template>
  <div class="p-10 font-sans py-10 flex justify-center">
    <div class="w-3/5 flex-row justify-center">
      <a href="/community"
        ><button
          class="bg-[#80a866] py-2 px-5 border rounded hover:bg-[#5f8d40] text-gray-100 hover:font-bold my-5"
        >
          목록
        </button></a
      >
      <div class="border rounded float-left w-full p-10">
        <div class="flex justify-end">
          <a href="/community-update"
            ><button
              class="bg-blue-300 py-2 px-5 border rounded hover:bg-blue-500 text-gray-100 mx-2 hover:font-bold"
            >
              수정
            </button></a
          >

          <button
            @click="removeResource(this.lockNumber)"
            class="bg-red-300 py-2 px-5 border rounded hover:bg-red-500 text-gray-100 hover:font-bold"
          >
            삭제
          </button>
        </div>
        <p>{{ this.nickName }}</p>
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
            <p class="font-bold">{{ this.leaveDate }}</p>
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
  emits: ['removeResource'],
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
    removeResource(lockNumber) {
      // const resIndex = this.storedResources.findIndex(
      //   (res) => res.id === resId,
      // );
      this.lockNumber = lockNumber;
      console.log(lockNumber);
      const deleteCheck = prompt(
        '삭제하시려면 게시물 비밀번호를 입력하여 주십시오',
      );

      if (lockNumber == deleteCheck) {
        if (confirm('삭제되었습니다.')) {
          this.$router.push('/community');
        }
        console.log(lockNumber);
      } else {
        alert('틀린 비밀번호입니다.');
        console.log(lockNumber);
        console.log(deleteCheck);
      }
      console.log(this.title);
    },
  },
};
</script>
