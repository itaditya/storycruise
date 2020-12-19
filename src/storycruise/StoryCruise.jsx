import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Shell } from './Shell';
import { Home } from './Home';

function StoryCruise() {
  return (
    <Router>
      <Routes>
        <Route path="stories" element={<Home />}></Route>
        <Route path="stories/*" element={<Shell />}></Route>
      </Routes>
    </Router>
  );
}

export default StoryCruise;
