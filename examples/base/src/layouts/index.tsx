import { Link, Outlet } from '@umijs/max';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <h2>Yay! Welcome to umi - base!</h2>
      <Outlet />
    </div>
  );
}
