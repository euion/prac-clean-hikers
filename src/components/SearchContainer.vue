<template>
  <div class="flex justify-center">
    <form class="bg-white rounded-2xl w-4/5 max-w-3xl flex justify-between p-3">
      <ul>
        <li class="flex justify-between w-25">
          <p>지역</p>
          <img src="@/assets/icon/chevron_forward.png" />
        </li>
        <p class="text-xs text-gray-400">Your destination</p>
      </ul>
      <ul>
        <li class="flex justify-between w-25">
          <p>날짜</p>
          <img src="@/assets/icon/chevron_forward.png" />
        </li>
        <p class="text-xs text-gray-400">When does it start?</p>
      </ul>
      <ul>
        <li class="flex justify-between w-25">
          <p>인원</p>
          <img src="@/assets/icon/chevron_forward.png" />
        </li>
        <p class="text-xs text-gray-400">How many people?</p>
      </ul>

      <div>
        <a href="/search-mountain">
          <button class="bg-blue-700 py-3 px-6 text-white rounded-2xl w-25">
            찾아보기
          </button></a
        >
      </div>
    </form>
  </div>
</template>
<script></script>
