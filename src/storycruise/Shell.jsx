import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';

import { getRoutes } from './storiesList';

import styles from './styles.module.css';

function Shell() {
  const routes = getRoutes();
  const element = useRoutes(routes);

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
