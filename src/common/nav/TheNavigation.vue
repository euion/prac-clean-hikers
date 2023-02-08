<template>
  <header>
    <nav>
      <div class="flex justify-between pl-5 pr-5 h-16 items-center">
        <ul class="w-1/5 content-center">
          <li class="no-underline">
            <router-link to="/">
              <img src="@/assets/logo/Logo.png" class="h-8 min-w-30" />
            </router-link>
          </li>
        </ul>
        <div class="w-2/5 max-w-xl items-center">
          <ul class="flex align-center justify-between items-center">
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
