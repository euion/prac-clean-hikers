<template>
  <div class="p-10 font-sans py-10 flex justify-center">
    <div class="w-4/6 flex justify-center">
      <div class="border rounded float-left w-full p-10">
        <a href="/community"
          ><button
            class="bg-[#80a866] py-2 px-5 border rounded hover:bg-[#5f8d40] text-gray-100 hover:font-bold"
          >
            목록
          </button></a
        >
        <h1 class="text-3xl font-bold py-2">
          {{ this.title }}
        </h1>
        <p>{{ this.nickName }}</p>
        <div class="float-right">
          <ul class="p-5 bg-[#b6e298] border rounded-[10px] text-gray-800">
            <li class="flex pb-1">
              방문할 산 :
              <p class="font-bold">{{ this.leaveMountain }}</p>
            </li>
            <li class="flex pb-1">
              <p>출발 일자:</p>
              <p class="font-bold">{{ this.leaveDate }}</p>
            </li>
          </ul>
        </div>
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
    };
  },
  methods: {
    check() {
      console.log(this.title);
    },
  },
};
</script>
