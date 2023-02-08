<template>
  <header>
    <nav>
      <div class="flex justify-between px-16 h-16 items-center">
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
            <li class="">
              <router-link to="/" class="font-sans font-bold">홈</router-link>
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
              <router-link to="/community"
                ><img src="@/assets/icon/profile.png"
              /></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
