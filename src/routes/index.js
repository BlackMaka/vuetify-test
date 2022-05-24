import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard';
import GridSystem from '../views/GridSystem';
import GridListPage from '../views/GridListPage';
import Breakpoints from '../views/Breakpoints';
import Typography from '../views/Typography';
import Color from '../views/Color';
import Display from '../views/Display';

import Table from '../views/Table';
import Button from '../views/Button';
import Form from '../views/Form';
import Icon from '../views/Icon';
import ProductList from '../views/page/ProductList';
import SignIn from '../views/authentication/SignIn';
import SignUp from '../views/authentication/SignUp';

import DefaultLayouts from '@/layouts/default/Index';
import PageLayouts from '@/layouts/page/Index';
import AuthenticationLayouts from '@/layouts/authentication/Index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayouts,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: '/grid-system',
        name: 'gridsystem',
        component: GridSystem,
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage,
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: Breakpoints,
      },
      {
        path: '/typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: '/color',
        name: 'Color',
        component: Color,
      },
      {
        path: '/display',
        name: 'Display',
        component: Display,
      },
      {
        path: '/table',
        name: 'Table',
        component: Table,
      },
      {
        path: '/button',
        name: 'Button',
        component: Button,
      },
      {
        path: '/icon',
        name: 'Icon',
        component: Icon,
      },
    ],
  },
  {
    path: '/page',
    component: PageLayouts,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList,
      },
    ],
  },
  {
    path: '/authentication',
    component: AuthenticationLayouts,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn,
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp,
      },
    ],
  },
  {
    path: '/form',
    component: Form,
    children: [
      {
        path: 'validation-form',
        name: 'ValidationForm',
        component: () => import('@/views/form/ValidationForm'),
      },
      {
        path: 'app-form',
        name: 'AppForm',
        component: () => import('@/views/form/AppForm'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
