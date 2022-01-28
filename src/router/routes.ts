import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/home',
        component: () => import('src/pages/Home/HomePage.vue'),
        children: [
          {
            path: '/home/child',
            component: () => import('src/pages/Home/ChildPage.vue'),
            children: [
              {
                path: '/home/child/grandchild',
                component: () => import('src/pages/Home/GrandchildPage.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/questions',
        component: () => import('src/pages/Questions/QuestionsPage.vue'),
        children: [
          {
            path: '/questions/answer',
            component: () => import('src/pages/Questions/AnswerPage.vue'),
          },
        ],
      },
      {
        path: '/images',
        component: () => import('src/pages/Images/ImagesPage.vue'),
        children: [
          {
            path: '/images/:id',
            component: () => import('src/pages/Images/ImagePage.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NotFound.vue'),
  },
];

export default routes;
