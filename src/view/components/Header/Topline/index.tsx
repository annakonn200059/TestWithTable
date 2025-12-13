import type { FC, ReactNode } from 'react';

import currentLogo from '@assets/images/Logo.svg';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface ToplineProps {
  children?: ReactNode;
}

const Topline: FC<ToplineProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={currentLogo} alt="Логотип" />
      </Link>

      <div className={styles.items_container}>{children}</div>

      <h3 className={styles.link__semi_bold}> Выйти </h3>
    </div>
  );
};

export default Topline;
