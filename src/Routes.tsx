import Home from "pages/home";
import Levels from "pages/levels";
import Level from "pages/level";
import PageNotFound from "pages/PageNotFound";

/**
 * Definition of route objects
 */
interface RouteProps {
  path: string;
  component: React.FC<{}>;
  props?: {};
}

const routes: RouteProps[] = [
  { path: "/", component: Home, props: { exact: true } },
  { path: "/levels", component: Levels },
  { path: "/level/:id", component: Level },
  { path: "*", component: PageNotFound },
];

export default routes;
