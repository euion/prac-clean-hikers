import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '@/pages/NotFound.vue';
import CommunityList from '@/pages/CommunityList.vue';
import MountainDetail from '@/pages/MountainDetail.vue';
import Main from '@/pages/Main.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/clean-hikers' },
    {
      name: 'main-page',
      path: '/clean-hikers',
      meta: { needsAuth: true },
      component: Main,
    },
    {
      name: 'community-list-page',
      path: '/community',
      meta: { needsAuth: true },
      component: CommunityList,
    },
    {
      name: 'mountain-detail',
      path: '/search-mountain',
      meta: { needsAuth: true },
      component: MountainDetail,
      props:true, 
    },
    {
      beforeEnter(to, from, next) {
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});


export default router;
