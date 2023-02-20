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
import TheNavigation from '@/common/nav/TheNavigation.vue';
//import Main from '@/pages/Main.vue';

export default {
  components: {
    TheNavigation,
    // Main,
  },
  data() {
    return {
      isLoading: false,
      errData: null,
      postDataList: [],
      postDataItem: [],
      lockNumber: '',
    };
  },
  provide() {
    return {
      addResource: this.addResource,
    };
  },
  methods: {
    addResource(title, description, url) {
      // createEventBus.$emit('addResource');
      const newResource = {
        id: new Date().toISOString, // 문자열 타임스탬프 생성
        title: title,
        description: description,
        link: url,
      };
      this.postDataList.unshift(newResource);
    },
  },
};
</script>
