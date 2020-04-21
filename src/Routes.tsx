import React, { lazy } from 'react';
import { Head } from 'components/Head';

// const Home = lazy(() => import('pages/home/Home'));
const Levels = lazy(() => import('pages/levels/Levels'));
const Level = lazy(() => import('pages/level/Level'));
const Counter = lazy(() => import('pages/counter/Counter'));
const Reserve = lazy(() => import('pages/reserve/Reserve'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

// const HomePage = () => pageTitle({ component: Home, title: 'Home' });
const LevelsPage = () => pageTitle({ component: Levels, title: 'Levels' });
const LevelPage = () => pageTitle({ component: Level, title: 'Level' });
const CounterPage = () => pageTitle({ component: Counter, title: 'Counter' });
const ReservePage = () => pageTitle({ component: Reserve, title: 'Reserve' });
const NotFoundPage = () =>
  pageTitle({ component: PageNotFound, title: 'Page not found' });

/**
 * Definition Props for pageTitle Component
 */
interface TitleProps {
  component: React.FC<{}>;
  title: string;
}

const pageTitle: React.FC<TitleProps> = ({ component: Component, title }) => {
  return (
    <React.Fragment>
      <Head title={title} />
      <Component />
    </React.Fragment>
  );
};

/**
 * Definition for routes
 */
interface RouteProps {
  path: string;
  component: React.FC<{}>;
  props?: {};
}

const routes: RouteProps[] = [
  { path: '/', component: LevelsPage, props: { exact: true } },
  // { path: '/levels', component: LevelsPage },
  { path: '/level/:id', component: LevelPage },
  { path: '/reserve', component: ReservePage },
  { path: '/counter', component: CounterPage },
  { path: '*', component: NotFoundPage },
];

export default routes;
