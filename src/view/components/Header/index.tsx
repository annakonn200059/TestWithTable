import URLS from '@/routes/urls';
import NavItem from './NavItem/NavItem';
import Topline from './Topline';

const Header = () => {
  return (
    <Topline>
      <NavItem title="Мои расходы" href={URLS.MY_EXPENSES} />
      <NavItem title="Анализ расходов" href={URLS.EXPENSES_ANALYSIS} />
    </Topline>
  );
};

export default Header;
