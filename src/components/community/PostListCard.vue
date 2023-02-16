<template>
  <div>
    <ul class="flex justify-center font-sans">
      <div class="w-full border-gray-200 rounded-[10px] border my-3 p-3">
        <ul>
          <li>
            <h1 class="font-bold flex justify-between">
              {{ postDataItem.title }}
              <button
                class="center text-red-600 p-1 rounded hover:bg-red-500 hover:text-gray-100"
              >
                <delete-outlined @click="clickDeleteBtn()" />
              </button>
            </h1>
          </li>
        </ul>
        <li class="flex">
          <p>출발일자 : {{ postDataItem.leaveDate }}</p>
        </li>
        <p class="font-bold">{{ postDataItem.nickname }}</p>
        <div class="flex justify-end">
          <button
            @click="this.$emit('readPost', postDataItem)"
            class="text-green-600 p-1 border rounded hover:bg-[#9acf77] hover:text-gray-100 cursor-pointer"
          >
            <team-outlined />포스팅으로 이동
          </button>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { DeleteOutlined, TeamOutlined } from '@ant-design/icons-vue';
export default {
  name: 'post-list-card',
  props: ['postDataItem', 'lockNumber'],
  components: { DeleteOutlined, TeamOutlined },
  methods: {
    clickDeleteBtn() {
      console.log('삭제1', this.$route.params.id, '-', this.lockNumber);
      this.$emit('deleteResource', this.$route.params.id, this.lockNumber);
    },
  },
};
</script>
