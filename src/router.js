import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '@/pages/NotFound.vue';
import CommunityList from '@/pages/CommunityList.vue';
import MountainDetail from '@/pages/MountainDetail.vue';
import Main from '@/pages/Main.vue';
import CommunityDetail from '@/pages/CommunityDetail.vue';
import CommunityCreate from '@/pages/CommunityCreate.vue';
import CommunityUpdate from '@/pages/CommunityUpdate.vue';

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
      name: 'community-list',
      path: '/community',
      meta: { needsAuth: true },
      component: CommunityList,
    },
    {
      name: 'mountain-detail',
      path: '/search-mountain',
      meta: { needsAuth: true },
      component: MountainDetail,
      props: true,
    },
    {
      name: 'community-detail',
      path: '/community-detail/:id',
      meta: { needsAuth: true },
      component: CommunityDetail,
      props: true,
    },
    {
      name: 'community-create',
      path: '/community-create',
      meta: { needsAuth: true },
      component: CommunityCreate,
      props: true,
    },
    {
      name: 'community-update',
      path: '/community-update',
      meta: { needsAuth: true },
      component: CommunityUpdate,
      props: true,
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
