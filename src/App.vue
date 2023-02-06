<template>
  <div>
    <the-navigation></the-navigation>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-view name="footer"></router-view>
    </footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/nav/TheNavigation.vue';
import Main from '@/pages/Main.vue';

export default {
  components: {
    TheNavigation,
    Main,
  },
};
</script>

<style></style>
