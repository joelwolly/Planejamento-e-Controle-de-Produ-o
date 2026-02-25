import { createRouter, createWebHistory } from 'vue-router';

import MaterialForm from '../components/MaterialForm.vue';
import ProductForm from '../components/ProductForm.vue';
import CompositionForm from '../components/CompositionForm.vue';
import SuggestionView from '../components/SuggestionView.vue';

const routes = [
  { path: '/', redirect: '/materiais' },
  { path: '/materiais', component: MaterialForm },
  { path: '/produtos', component: ProductForm },
  { path: '/composicao', component: CompositionForm },
  { path: '/sugestao', component: SuggestionView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;