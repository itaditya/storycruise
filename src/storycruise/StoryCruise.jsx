import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Shell } from './Shell';

function StoryCruise() {
  return (
    <Router>
      <Routes>
        <Route path="stories/*" element={<Shell />}></Route>
      </Routes>
    </Router>
  );
}

export default StoryCruise;
