<template>
  <div class="flex justify-center">
    <form @submit.prevent="submitForm">
      <div class="m-5">
        <div>
          <ul class="justify-around">
            <li>출발날짜 : {{ inputTitleData.leaveDate }}</li>
            <li>목적지 : {{ inputTitleData.leaveMountain }}</li>
            <li>모집인원: {{ inputTitleData.leavePersonnel }}명</li>
          </ul>
        </div>
        <div>
          <input class="border border-gray-300 p-2" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'create-form',
  props: ['inputTitleData'],
};
</script>
