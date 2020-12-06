import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from 'react-router-dom';

import { getRoutes } from './storiesList';

function Home() {
  const routes = getRoutes();
  const element = useRoutes(routes);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/stories/">All Stories Link</Link>
          </li>
          {routes.map((route) => (
            <li key={route.name}>
              <Link to={`/stories/${route.path}`}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      Home Content
      {element}
    </div>
  );
}

function StoryCruise() {
  return (
    <Router>
      <Routes>
        <Route path="stories/*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default StoryCruise;
