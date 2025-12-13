import styles from './styles.module.scss';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.page_wrapper}>{children}</div>;
};

export default PageWrapper;
