import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from 'components/Loading'
import routes from "Routes";

const App = () => {
  return (
    <div className="antialiased flex flex-col h-screen">
      <section className="container flex-1 mx-auto p-6">
        <Router>
          <React.Suspense fallback={<Loading />}>
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
          </React.Suspense>
        </Router>
      </section>
    </div>
  );
};

export default App;
