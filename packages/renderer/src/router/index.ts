import Tables from '../views/Tables.vue';
import HomeView from '../views/HomeView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/tables',
    name: 'Tabelle del Database',
    component: Tables,
    meta: { transition: 'slide-left' },
    children: [
      {
        path: '/tables/tipo_alloggiato',
        name: 'Tipo Alloggiato',
        component: () => import('../components/TipoAlloggiato.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: '/tables/tipo_documento',
        name: 'Tipi Documento',
        component: () => import('../components/TipoDocumento.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: '/tables/comuni',
        name: 'Comuni',
        component: () => import('../components/Comuni.vue'),
        meta: { transition: 'slide-left' },
      },
    ],
  },
  // {
  //   path: '/upload',
  //   name: 'TabellePS',
  //   component: () => import('../components/UploadData.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition)
      return savedPosition;
    else
      return { left: 0, top: 0 };
  },
});

export default router;
