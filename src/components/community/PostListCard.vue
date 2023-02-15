<template>
  <div>
    <ul class="flex justify-center font-sans">
      <div
        class="w-5/6 border-gray-200 rounded-[10px] border m-3 p-3 cursor-pointer hover:bg-lime-100"
      >
        <ul>
          <li>{{ postDataItem.leaveDate }}</li>
          <li>
            <h1 class="font-bold">
              {{ postDataItem.title }}
            </h1>
          </li>
        </ul>
        <li>{{ postDataItem.nickname }}</li>
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
