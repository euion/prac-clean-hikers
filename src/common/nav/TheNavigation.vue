<template>
  <header>
    <nav>
      <div
        class="flex justify-between px-16 h-16 items-center border border-b-slate-200"
      >
        <ul class="w-1/5 content-center">
          <li class="no-underline">
            <router-link to="/">
              <img
                src="@/assets/logo/mainLogo.png"
                class="h-8 w-30 max-w-[150px]"
              />
            </router-link>
          </li>
        </ul>
        <div class="w-2/5 max-w-[320px] max-sm:w-[180px] items-center">
          <ul
            class="flex align-center justify-between items-center max-sm:text-xs"
          >
            <!-- <li class="hover:text-lime-600">
              <router-link to="/"
                ><p class="font-sans font-bold">홈</p></router-link
              >
            </li>
            <li>
              <router-link to="/search-mountain" class="font-sans font-bold"
                ><div>산찾기</div></router-link
              >
            </li>
            <li>
              <router-link to="/community" class="font-sans font-bold"
                >커뮤니티</router-link
              >
            </li>
            <li>
              <router-link to="/"
                ><img src="@/assets/icon/profile.png"
              /></router-link>
            </li> -->

            <li v-for="(nav, index) in navList" :key="index">
              <router-link :to="nav.link">
                <p class="hover:text-lime-600 font-sans font-bold">
                  {{ nav.content }}
                </p>
              </router-link>
            </li>
            <li>
              <router-link to="/"
                ><img src="@/assets/icon/profile.png"
              /></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          link: '/',
          content: '홈',
        },
        {
          link: '/search-mountain',
          content: '산찾기',
        },
        {
          link: '/community',
          content: '커뮤니티',
        },
      ],
    };
  },
};
</script>
