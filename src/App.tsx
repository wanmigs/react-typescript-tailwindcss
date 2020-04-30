import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';
import routes from 'Routes';
import { getThemeByName } from 'services/Theme';
import { useAppDispatch } from 'providers/AppProvider';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getThemeByName('commonwealth').then((data) => {
      const root = document.documentElement;
      root.style.setProperty('--bg-color', data.backgroundColor);
      root.style.setProperty('--bg-image', `url(${data.backgroundImage})`);
      root.style.setProperty('--bg-floor', data.floorBackground);
      root.style.setProperty('--bg-highlight', data.highlightBackground + '33');
      root.style.setProperty('--font-color', data.fontColor);
      root.style.setProperty('--font-family', data.fontFamily);
      root.style.setProperty('--button-bg-color', data.buttonBackground);
      root.style.setProperty('--button-text-color', data.buttonText);
      root.style.setProperty(
        '--button-border-color',
        data.buttonBorder || data.buttonBackground
      );

      dispatch({ type: 'SET_THEME', theme: data });
    });
  }, []);

  return (
    <div className="antialiased flex flex-col h-screen">
      <section className="flex-1 mx-auto overflow-x-hidden w-full">
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
