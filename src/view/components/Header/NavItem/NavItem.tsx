import type { FC } from 'react';

import styles from './styles.module.scss';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  title: string;
  href: string;
}

const NavItem: FC<Props> = ({ title, href }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      className={
        pathname.startsWith(href)
          ? clsx(styles.item_selected, styles.item)
          : styles.item
      }
      to={href}
    >
      {title}
    </NavLink>
  );
};

export default NavItem;
