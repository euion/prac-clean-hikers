<template>
  <div>
    <ul class="flex justify-center font-sans">
      <div
        class="w-full border-gray-200 rounded-[10px] border my-3 p-3 cursor-pointer hover:bg-lime-100"
      >
        <ul>
          <li>
            <h1 class="font-bold flex justify-between">
              {{ postDataItem.title }}
              <p class="font-bold">{{ postDataItem.nickname }}</p>
            </h1>
          </li>
        </ul>
        <li class="flex">
          <p>출발일자 : {{ postDataItem.leaveDate }}</p>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'post-list-card',
  props: ['postDataItem'],
};
</script>
