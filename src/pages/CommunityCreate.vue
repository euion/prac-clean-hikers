<template>
  <div>
    <h1 class="text-3xl font-sans font-bold py-9 text-center">
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
                <!-- 출발일자를 선택하세요 -->
                <ul class="w-25 pr-2">
                  <div>
                    <datepicker
                      class="h-[40px]"
                      v-model="this.leaveDateSelected"
                      :value="this.leaveDateSelected"
                      :weekStartsOn="0"
                      :clearable="true"
                    />
                  </div>
                  <p class="text-xs text-gray-400">When does it start?</p>
                </ul>
              </li>
              <li>
                <!-- 목적지를 선택하세요 -->
                <select
                  id="region"
                  name="region"
                  v-model="regionSelected"
                  class="border w-full h-[40px]"
                >
                  <option
                    v-if="!this.createDataList.regionSelected"
                    :value="this.createDataList.regionSelected"
                    selected
                    disabled
                  >
                    지 역
                  </option>
                  <option
                    v-for="region in regions"
                    :value="region.value"
                    @change="mainParams(region.value)"
                    :key="region.id"
                  >
                    <p>{{ region.text }}</p>
                  </option>
                </select>
                <p class="text-xs text-gray-400">Your destination</p>
              </li>

              <li>
                <!-- 모집인원을 선택하세요 -->
                <select
                  id="personnel"
                  name="personnel"
                  v-model="personnelSelected"
                  class="border w-full h-[40px]"
                >
                  <option
                    v-if="!this.createDataList.personnelSelected"
                    :value="this.createDataList.personnelSelected"
                    selected
                    disabled
                  >
                    선 택
                  </option>
                  <option
                    v-for="personnel in this.personnels"
                    :value="personnel.value"
                    @change="mainParams(personnel.value)"
                    :key="personnel.id"
                  >
                    <p>{{ personnel.text }}</p>
                  </option>
                </select>
                <p class="text-xs text-gray-400">How many people?</p>
              </li>
            </ul>
          </div>
          <div>
            <div class="flex justify-between">
              <input
                class="border rounded border-gray-300 p-2 w-full mr-1 mb-2"
                name="title"
                ref="nicknameInput"
                placeholder="닉네임"
              />

              <input
                class="border rounded border-gray-300 p-2 w-full ml-1 mb-2"
                name="passwordNumber"
                type="password"
                ref="passwordNumber"
                placeholder="비밀번호"
              />
            </div>

            <input
              class="border rounded border-gray-300 p-2 w-full"
              name="title"
              ref="titleInput"
              placeholder="제목"
            />

            <textarea
              rows="20"
              class="border rounded border-gray-300 p-2 w-full my-2"
              ref="descriptionInput"
              name="description"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-red-300 py-2 px-5 border rounded hover:bg-red-500 text-gray-100 hover:font-bold my-5"
            @click="addResource"
          >
            글쓰기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { ko } from 'date-fns/locale';

export default {
  name: 'community-create',
  emits: ['addResource'],
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
      regionSelected: this.$route.query.region,
      leaveDateSelected: new Date(this.$route.query.ISOdate),
      createDataList: [
        {
          regionSelected: this.$route.query.region,
          dateSelected: this.$route.query.date,
          personnelSelected: this.$route.query.personnel,
          titleValue: '',
          descriptionValue: '',
        },
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
      personnelSelected: this.$route.query.personnel,
    };
  },
  methods: {
    addResource() {
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
          personnel: this.personnelSelected,
          leaveDate: this.leaveDateSelected,
          leaveMountain: this.regionSelected,
        },
      });
    },
  },
  setup() {
    let datePicked = ref(new Date());
    let locale = reactive(ko);
    let inputFormat = ref('yyyy-MM-dd');
    return {
      datePicked,
      locale,
      inputFormat,
    };
  },
};
</script>
