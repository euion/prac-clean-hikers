<template>
  <div>
    <div>
      <h1 class="text-3xl font-sans font-bold py-5 text-center">
        커뮤니티를 확인해보세요
      </h1>
    </div>
    <div class="flex justify-center">
      <div class="m-5 w-3/5">
        <form @submit.prevent="submit">
          <div>
            <div class="">
              <ul class="py-2 grid grid-cols-3 gap-2">
                <li>
                  출발일자를 선택하세요
                  <ul class="w-25 pr-2">
                    <div>
                      <datepicker
                        class="h-[40px]"
                        v-model="this.leaveDate"
                        :value="this.leaveDate"
                        :weekStartsOn="0"
                        :clearable="true"
                      />
                    </div>
                  </ul>
                </li>
                <li>
                  목적지를 선택하세요
                  <select
                    id="region"
                    name="region"
                    v-model="this.leaveMountain"
                    class="border w-full h-[40px]"
                  >
                    <option
                      v-for="region in this.regions"
                      :value="region.value"
                      @change="mainParams(region.value)"
                      :key="region.id"
                    >
                      <p>{{ region.text }}</p>
                    </option>
                  </select>
                </li>

                <li>
                  모집인원을 선택하세요
                  <select
                    id="personnel"
                    name="personnel"
                    v-model="this.personnel"
                    class="border w-full h-[40px]"
                  >
                    <option
                      v-for="personnel in this.personnels"
                      :value="personnel.value"
                      @change="mainParams(personnel.value)"
                      :key="personnel.id"
                    >
                      <p>{{ personnel.text }}</p>
                    </option>
                  </select>
                </li>
              </ul>
            </div>
            <div>
              <div class="flex justify-between">
                <input
                  class="border rounded border-gray-300 p-2 w-full mr-1 mb-2"
                  name="title"
                  :value="this.nickname"
                  ref="nicknameInput"
                  placeholder="닉네임"
                />

                <input
                  class="border rounded border-gray-300 p-2 w-full ml-1 mb-2"
                  name="passwordNumber"
                  :value="this.lockNumber"
                  type="password"
                  ref="passwordNumber"
                  placeholder="비밀번호"
                />
              </div>
              <input
                class="border rounded border-gray-300 p-2 w-full"
                name="title"
                :value="this.title"
                ref="titleInput"
                placeholder="제목"
              />

              <textarea
                rows="20"
                class="border rounded border-gray-300 p-2 w-full my-2"
                :value="this.description"
                ref="descriptionInput"
                name="description"
              ></textarea>
            </div>
          </div>

          <button
            class="bg-red-300 py-2 px-5 border rounded hover:bg-red-500 text-gray-100 hover:font-bold"
            @click="updateResource"
          >
            글쓰기
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'community-update',
  data() {
    return {
      regions: [
        { text: '설악산', value: '설악산' },
        { text: '지리산', value: '지리산' },
        { text: '계룡산', value: '계룡산' },
        { text: '속리산', value: '속리산' },
        { text: '한라산', value: '한라산' },
        { text: '내장산', value: '내장산' },
        { text: '덕유산', value: '덕유산' },
        { text: '오대산', value: '오대산' },
        { text: '주왕산', value: '주왕산' },
        { text: '치악산', value: '치악산' },
        { text: '월악산', value: '월악산' },
      ],
      personnels: [
        { text: '1 명', value: 1 },
        { text: '2 명', value: 2 },
        { text: '3 명', value: 3 },
        { text: '4 명', value: 4 },
        { text: '5 명', value: 5 },
        { text: '6 명', value: 6 },
        { text: '7 명', value: 7 },
        { text: '8 명', value: 8 },
      ],
      title: this.$route.query.title,
      nickname: this.$route.query.nickname,
      description: this.$route.query.description,
      personnel: this.$route.query.personnel,
      leaveDate: this.$route.query.leaveDate,
      leaveMountain: this.$route.query.leaveMountain,
      lockNumber: this.$route.query.lockNumber,
    };
  },
  methods: {
    updateResource() {
      this.isAddPost = true;
      this.$router.push({
        name: 'community-detail',
        params: {
          id: new Date().toISOString,
        },
        query: {
          title: this.$refs.titleInput.value,
          description: this.$refs.descriptionInput.value,
          nickname: this.$refs.nicknameInput.value,
          lockNumber: this.$refs.passwordNumber.value,
          personnel: this.personnel,
          leaveDate: this.leaveDate,
          leaveMountain: this.leaveMountain,
        },
      });
    },
  },
};
</script>
