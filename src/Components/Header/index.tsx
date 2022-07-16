import { BooksResults } from '../Books';
import logo from '../../assets/logo.png';
import SearchBar from './SearchBar';

import styles from './styles.module.scss';

interface HeaderProps {
  books: BooksResults;
  handlers: {
    setBooks: React.Dispatch<any>;
    setLoading: React.Dispatch<any>;
    setLoaded: React.Dispatch<any>;
  };
}

function Header({ books, handlers }: HeaderProps) {
  return (
    <>
      <div
        className={
          !(books.totalItems > 0)
            ? styles.content
            : `${styles.content} ${styles.top}`
        }
      >
        <div
          className={
            !(books.totalItems > 0)
              ? styles.logoContainer
              : `${styles.logoContainer} ${styles.found}`
          }
        >
          <img className={styles.logo} src={logo} alt="Google Books Logo"></img>
        </div>
        <SearchBar handlers={handlers}>{}</SearchBar>
      </div>
    </>
  );
}

export default Header;
