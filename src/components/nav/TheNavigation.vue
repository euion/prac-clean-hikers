<template>
  <header>
    <nav>
      <ul>
        <li class="no-underline">
          <router-link to="/">
            <img src="@/assets/Logo.png" class="no-underline" />
          </router-link>
        </li>
        <li>
          <router-link to="/">홈</router-link>
        </li>
        <li>
          <router-link to="/search-mountain"><div>산찾기</div></router-link>
        </li>
        <li>
          <router-link to="/community">커뮤니티</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
