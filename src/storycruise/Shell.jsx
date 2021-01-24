import React, { useEffect } from 'react';
import { NavLink, useRoutes, useNavigate } from 'react-router-dom';

import { getRoutes } from './storiesList';

import styles from './styles.module.css';

const routes = getRoutes();

function Shell() {
  const element = useRoutes(routes);
  const navigate = useNavigate();

  useEffect(() => {
    if (!element) {
      const firstStoryPath = routes[0].path;
      navigate(`/stories/${firstStoryPath}`);
    }
  }, [element]);

  return (
    <div className={styles.storycruiseWrapper}>
      <nav className={styles.sidebar}>
        <h2 className={styles.projectTitle}>Storycruise</h2>
        <ul className={styles.storiesList}>
          {routes.map((route) => (
            <li key={route.name}>
              <NavLink className={styles.storyLink} activeClassName={styles.active} to={`/stories/${route.path}`}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>
        {element}
      </main>
    </div>
  );
}

export { Shell };
