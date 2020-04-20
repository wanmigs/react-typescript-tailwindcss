import React, { lazy } from 'react';

const Home = lazy(() => import('pages/home/Home'));
const Levels = lazy(() => import('pages/levels/Levels'));
const Level = lazy(() => import('pages/level/Level'));
const Counter = lazy(() => import('pages/counter/Counter'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

/**
 * Definition of route objects
 */
interface RouteProps {
  path: string;
  component: React.FC<{}>;
  props?: {};
}

const routes: RouteProps[] = [
  { path: '/', component: Home, props: { exact: true } },
  { path: '/levels', component: Levels },
  { path: '/level/:id', component: Level },
  { path: '/counter', component: Counter },
  { path: '*', component: PageNotFound },
];

export default routes;
