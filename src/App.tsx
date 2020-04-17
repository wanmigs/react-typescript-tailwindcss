import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/home/Home";
import PageNotFound from "pages/PageNotFound";

const App = () => {
  const routes: Array<{
    path: string;
    component: React.FC<{}>;
    props?: {};
  }> = [
    { path: "/", component: Home, props: { exact: true } },
    { path: "/about", component: Home },
    { path: "*", component: PageNotFound },
  ];

  return (
    <div className="antialiased flex flex-col h-screen">
      <section className="container flex-1 mx-auto p-6">
        <Router>
          <Switch>
            {routes.map((route, key) => (
              <Route
                path={route.path}
                component={route.component}
                {...route.props}
                key={key}
              />
            ))}
          </Switch>
        </Router>
      </section>
    </div>
  );
};

export default App;
